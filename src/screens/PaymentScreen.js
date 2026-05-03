// src/screens/PaymentScreen.js
import React, { useState, useCallback, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
  StatusBar,
  Animated,
  ScrollView,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { LinearGradient } from 'expo-linear-gradient';

// ─── Configuración ────────────────────────────────────────────────────────────
// Cambia esta URL por la que te da Railway cuando despliegues el backend
const BACKEND_URL = __DEV__
  ? 'http://192.168.1.150:4000'          // desarrollo local (tu IP WiFi)
  : 'https://learniq-backend-production.up.railway.app';

const PRICE = '4.99';
const CURRENCY = 'EUR';

// ─── Características del producto ─────────────────────────────────────────────
const FEATURES = [
  { icon: '🧠', text: '40 preguntas científicamente validadas' },
  { icon: '📊', text: 'Perfil detallado de las 8 inteligencias' },
  { icon: '🎯', text: 'Recomendaciones de carrera personalizadas' },
  { icon: '📚', text: 'Estrategias de aprendizaje exclusivas' },
  { icon: '🔒', text: 'Acceso de por vida · Pago único' },
];

// ─── Componente principal ─────────────────────────────────────────────────────
export default function PaymentScreen({ navigation }) {
  const [step, setStep] = useState('idle'); // idle | loading | webview | success | error
  const [approvalUrl, setApprovalUrl] = useState(null);
  const [orderID, setOrderID] = useState(null);

  const scaleAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  const handlePressIn = () =>
    Animated.spring(scaleAnim, { toValue: 0.97, useNativeDriver: true }).start();
  const handlePressOut = () =>
    Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true }).start();

  // ── Paso 1: Crear orden en el backend ─────────────────────────────────────
  const handlePay = async () => {
    setStep('loading');
    try {
      const res = await fetch(`${BACKEND_URL}/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: PRICE, currency: CURRENCY }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      if (!data.approvalUrl) throw new Error('No se recibió URL de PayPal');

      setOrderID(data.orderID);
      setApprovalUrl(data.approvalUrl);
      setStep('webview');
    } catch (err) {
      console.error('handlePay error:', err);
      setStep('idle');
      Alert.alert(
        'Error de conexión',
        'No se pudo conectar con el servidor de pagos.\nAsegúrate de que el backend está corriendo.',
        [{ text: 'OK' }]
      );
    }
  };

  // ── Paso 2: Detectar redirección y capturar pago ──────────────────────────
  const handleNavigationChange = useCallback(
    async (navState) => {
      const { url } = navState;

      // PayPal redirige a return_url con token y PayerID al aprobar
      if (url.includes('learniq.app/success') || (url.includes('token=') && url.includes('PayerID='))) {
        setStep('loading');
        try {
          const res = await fetch(`${BACKEND_URL}/capture-order`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderID }),
          });

          const data = await res.json();

          if (data.success) {
            setStep('success');
          } else {
            throw new Error(data.status || 'Capture fallido');
          }
        } catch (err) {
          console.error('capture error:', err);
          setStep('idle');
          Alert.alert('Pago no completado', 'Hubo un problema al procesar el pago. Por favor inténtalo de nuevo.');
        }
      }

      // Usuario canceló en PayPal
      if (url.includes('learniq.app/cancel')) {
        setStep('idle');
      }
    },
    [orderID]
  );

  // ── WebView de PayPal ──────────────────────────────────────────────────────
  if (step === 'webview' && approvalUrl) {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />

        {/* Header mínimo con botón volver */}
        <View style={styles.webviewHeader}>
          <TouchableOpacity onPress={() => setStep('idle')} style={styles.backBtn}>
            <Text style={styles.backBtnText}>← Volver</Text>
          </TouchableOpacity>
          <Text style={styles.webviewTitle}>Pago seguro con PayPal</Text>
          <View style={{ width: 80 }} />
        </View>

        <WebView
          source={{ uri: approvalUrl }}
          onNavigationStateChange={handleNavigationChange}
          startInLoadingState
          renderLoading={() => (
            <View style={styles.webviewLoader}>
              <ActivityIndicator size="large" color="#0070BA" />
              <Text style={styles.webviewLoaderText}>Cargando PayPal...</Text>
            </View>
          )}
        />
      </View>
    );
  }

  // ── Pantalla de éxito ──────────────────────────────────────────────────────
  if (step === 'success') {
    return (
      <LinearGradient colors={['#0D0B1E', '#0d2010']} style={styles.successContainer}>
        <StatusBar barStyle="light-content" />
        <Animated.View style={{ alignItems: 'center', opacity: fadeAnim }}>
          <View style={styles.successIconWrapper}>
            <Text style={styles.successIcon}>✅</Text>
          </View>
          <Text style={styles.successTitle}>¡Pago completado!</Text>
          <Text style={styles.successSub}>
            Bienvenido al Test Premium de{'\n'}Inteligencias Múltiples
          </Text>

          <View style={styles.successCard}>
            <Text style={styles.successCardText}>🏆 Acceso Premium activado</Text>
          </View>

          <TouchableOpacity
            style={styles.successBtn}
            onPress={() => navigation.navigate('PremiumIntro')}
          >
            <LinearGradient
              colors={['#7C3AED', '#4F46E5']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.successBtnGradient}
            >
              <Text style={styles.successBtnText}>Comenzar el Test Premium →</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    );
  }

  // ── Pantalla principal de pago ─────────────────────────────────────────────
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0D0B1E" />
      <LinearGradient
        colors={['#0D0B1E', '#1a0a30']}
        style={StyleSheet.absoluteFillObject}
      />

      {/* Decorative glow */}
      <View style={styles.glowTop} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View style={{ opacity: fadeAnim }}>

          {/* Botón volver */}
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.topBack}>
            <Text style={styles.topBackText}>← Volver</Text>
          </TouchableOpacity>

          {/* Badge premium */}
          <View style={styles.premiumBadge}>
            <Text style={styles.premiumBadgeText}>⭐ PREMIUM</Text>
          </View>

          {/* Título */}
          <Text style={styles.productTitle}>Test de Inteligencias{'\n'}Múltiples Avanzado</Text>
          <Text style={styles.productSub}>
            Basado en la teoría de Howard Gardner · 40 preguntas
          </Text>

          {/* Precio */}
          <View style={styles.priceContainer}>
            <Text style={styles.priceCurrency}>€</Text>
            <Text style={styles.priceAmount}>4.99</Text>
          </View>
          <Text style={styles.priceNote}>Pago único · Sin suscripciones</Text>

          {/* Separador */}
          <View style={styles.divider} />

          {/* Características */}
          <Text style={styles.featuresTitle}>¿Qué incluye?</Text>
          {FEATURES.map((f, i) => (
            <View key={i} style={styles.featureRow}>
              <Text style={styles.featureIcon}>{f.icon}</Text>
              <Text style={styles.featureText}>{f.text}</Text>
            </View>
          ))}

          {/* Separador */}
          <View style={styles.divider} />

          {/* Botón de pago */}
          {step === 'loading' ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator color="#0070BA" size="large" />
              <Text style={styles.loadingText}>Conectando con PayPal...</Text>
            </View>
          ) : (
            <TouchableOpacity
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              onPress={handlePay}
              activeOpacity={1}
            >
              <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                <LinearGradient
                  colors={['#0070BA', '#003087']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.payBtn}
                >
                  <Text style={styles.payBtnPaypal}>PayPal</Text>
                  <Text style={styles.payBtnText}>  ·  Pagar €4.99</Text>
                </LinearGradient>
              </Animated.View>
            </TouchableOpacity>
          )}

          {/* Seguridad */}
          <View style={styles.securityRow}>
            <Text style={styles.securityIcon}>🔒</Text>
            <Text style={styles.securityText}>
              Pago 100% seguro gestionado por PayPal. No almacenamos datos de pago.
            </Text>
          </View>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

// ─── Estilos ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0D0B1E' },
  scrollContent: { paddingHorizontal: 24, paddingBottom: 50, paddingTop: 20 },

  glowTop: {
    position: 'absolute',
    top: -100,
    right: -80,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(124,58,237,0.15)',
  },

  // Back button
  topBack: { marginBottom: 20 },
  topBackText: { color: 'rgba(255,255,255,0.5)', fontSize: 14 },

  // Badge
  premiumBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(245,158,11,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(245,158,11,0.4)',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 5,
    marginBottom: 16,
  },
  premiumBadgeText: { color: '#F59E0B', fontWeight: '700', fontSize: 12, letterSpacing: 1 },

  // Producto
  productTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#fff',
    lineHeight: 38,
    marginBottom: 8,
  },
  productSub: { fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 28 },

  // Precio
  priceContainer: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 4 },
  priceCurrency: { fontSize: 24, color: '#F59E0B', fontWeight: '800', marginTop: 8 },
  priceAmount: { fontSize: 64, color: '#F59E0B', fontWeight: '900', lineHeight: 72 },
  priceNote: { fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 24 },

  // Divider
  divider: { height: 1, backgroundColor: 'rgba(255,255,255,0.08)', marginVertical: 20 },

  // Features
  featuresTitle: { fontSize: 15, fontWeight: '700', color: '#fff', marginBottom: 14 },
  featureRow: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 12 },
  featureIcon: { fontSize: 20, width: 28, textAlign: 'center' },
  featureText: { fontSize: 14, color: 'rgba(255,255,255,0.75)', flex: 1 },

  // Pay button
  payBtn: {
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    elevation: 8,
    shadowColor: '#0070BA',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
  },
  payBtnPaypal: { color: '#fff', fontWeight: '900', fontSize: 18, fontStyle: 'italic' },
  payBtnText: { color: 'rgba(255,255,255,0.85)', fontWeight: '600', fontSize: 16 },

  // Loading
  loadingContainer: { alignItems: 'center', paddingVertical: 20, gap: 12 },
  loadingText: { color: 'rgba(255,255,255,0.5)', fontSize: 14 },

  // Security
  securityRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginTop: 16,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: 12,
    padding: 12,
  },
  securityIcon: { fontSize: 16 },
  securityText: { fontSize: 12, color: 'rgba(255,255,255,0.4)', flex: 1, lineHeight: 18 },

  // WebView header
  webviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backBtn: { padding: 4 },
  backBtnText: { color: '#0070BA', fontWeight: '600', fontSize: 14 },
  webviewTitle: { fontSize: 14, fontWeight: '700', color: '#333' },
  webviewLoader: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#fff',
  },
  webviewLoaderText: { color: '#999', fontSize: 14 },

  // Success screen
  successContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 32 },
  successIconWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(16,185,129,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(16,185,129,0.3)',
  },
  successIcon: { fontSize: 50 },
  successTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  successSub: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 28,
  },
  successCard: {
    backgroundColor: 'rgba(16,185,129,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(16,185,129,0.3)',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginBottom: 32,
  },
  successCardText: { color: '#10B981', fontWeight: '700', fontSize: 15 },
  successBtn: { width: '100%', borderRadius: 16, overflow: 'hidden' },
  successBtnGradient: { paddingVertical: 18, alignItems: 'center' },
  successBtnText: { color: '#fff', fontWeight: '800', fontSize: 16 },
});
