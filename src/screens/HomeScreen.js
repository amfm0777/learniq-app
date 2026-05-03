// src/screens/HomeScreen.js
import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  Dimensions,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../theme/colors';

const { width } = Dimensions.get('window');

const BrainIcon = () => (
  <View style={styles.iconWrapper}>
    <Text style={styles.iconEmoji}>🧠</Text>
  </View>
);

const FeatureChip = ({ emoji, text }) => (
  <View style={styles.chip}>
    <Text style={styles.chipEmoji}>{emoji}</Text>
    <Text style={styles.chipText}>{text}</Text>
  </View>
);

const TestCard = ({ title, subtitle, emoji, duration, questions, gradient, tag, onPress, tagColor }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, { toValue: 0.97, useNativeDriver: true }).start();
  };
  const handlePressOut = () => {
    Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true }).start();
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
    >
      <Animated.View style={[styles.testCard, { transform: [{ scale: scaleAnim }] }]}>
        <LinearGradient colors={gradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.testCardGradient}>
          <View style={styles.testCardHeader}>
            <View style={styles.testCardTag}>
              <Text style={[styles.testCardTagText, { color: tagColor }]}>{tag}</Text>
            </View>
            <Text style={styles.testCardEmoji}>{emoji}</Text>
          </View>
          <Text style={styles.testCardTitle}>{title}</Text>
          <Text style={styles.testCardSubtitle}>{subtitle}</Text>
          <View style={styles.testCardMeta}>
            <View style={styles.testCardMetaItem}>
              <Text style={styles.testCardMetaIcon}>⏱️</Text>
              <Text style={styles.testCardMetaText}>{duration}</Text>
            </View>
            <View style={styles.testCardMetaItem}>
              <Text style={styles.testCardMetaIcon}>❓</Text>
              <Text style={styles.testCardMetaText}>{questions} preguntas</Text>
            </View>
          </View>
          <View style={styles.startBtn}>
            <Text style={styles.startBtnText}>Comenzar Test →</Text>
          </View>
        </LinearGradient>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default function HomeScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 700, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 700, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.bg.primary} />
      <LinearGradient colors={[Colors.bg.primary, Colors.bg.secondary]} style={StyleSheet.absoluteFillObject} />

      {/* Decorative circles */}
      <View style={[styles.circle, styles.circleTop]} />
      <View style={[styles.circle, styles.circleBottom]} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
          {/* Header */}
          <View style={styles.header}>
            <BrainIcon />
            <Text style={styles.appName}>LearnIQ</Text>
            <Text style={styles.tagline}>Descubre cómo aprendes mejor</Text>
          </View>

          {/* Feature chips */}
          <View style={styles.chips}>
            <FeatureChip emoji="🎯" text="Tests validados" />
            <FeatureChip emoji="📊" text="Análisis detallado" />
            <FeatureChip emoji="🚀" text="Mejora continua" />
          </View>

          {/* Hero description */}
          <View style={styles.heroCard}>
            <LinearGradient
              colors={['rgba(124,58,237,0.15)', 'rgba(59,130,246,0.08)']}
              style={styles.heroCardGradient}
            >
              <Text style={styles.heroTitle}>¿Cómo aprendes?</Text>
              <Text style={styles.heroDesc}>
                Cada persona tiene un perfil de aprendizaje único. Nuestros tests basados en modelos científicos
                reconocidos te ayudan a descubrirlo.
              </Text>
            </LinearGradient>
          </View>

          {/* Test Cards */}
          <Text style={styles.sectionTitle}>Elige tu test</Text>

          <TestCard
            title="Test VARK Básico"
            subtitle="Identifica tu estilo principal de aprendizaje entre los 4 estilos VARK"
            emoji="🎓"
            duration="5–8 min"
            questions={20}
            gradient={['#1E1060', '#2D1B8B']}
            tag="GRATUITO"
            tagColor="#A78BFA"
            onPress={() => navigation.navigate('BasicIntro')}
          />

          <TestCard
            title="Test Premium Avanzado"
            subtitle="Perfil completo de las 8 Inteligencias Múltiples de Howard Gardner"
            emoji="⭐"
            duration="12–18 min"
            questions={40}
            gradient={['#7C2020', '#8B4513']}
            tag="PREMIUM"
            tagColor="#F59E0B"
            onPress={() => navigation.navigate('Payment')}
          />

          {/* About section */}
          <View style={styles.aboutSection}>
            <Text style={styles.aboutTitle}>¿Qué evalúa cada test?</Text>
            <View style={styles.aboutItem}>
              <Text style={styles.aboutEmoji}>📘</Text>
              <View style={styles.aboutContent}>
                <Text style={styles.aboutLabel}>Test Básico — VARK</Text>
                <Text style={styles.aboutText}>
                  El modelo VARK (Visual, Auditivo, Lecto-escritor, Kinestésico) identifica cómo prefieres recibir
                  y procesar información nueva.
                </Text>
              </View>
            </View>
            <View style={styles.aboutItem}>
              <Text style={styles.aboutEmoji}>🏆</Text>
              <View style={styles.aboutContent}>
                <Text style={styles.aboutLabel}>Test Premium — Inteligencias Múltiples</Text>
                <Text style={styles.aboutText}>
                  La teoría de Howard Gardner (1983) propone 8 tipos de inteligencia. Este test crea tu perfil
                  completo con recomendaciones de carrera y estrategias personalizadas.
                </Text>
              </View>
            </View>
          </View>

          {/* Disclaimer preview */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Disclaimer')}
            style={styles.disclaimerBtn}
          >
            <Text style={styles.disclaimerBtnIcon}>⚖️</Text>
            <Text style={styles.disclaimerBtnText}>Ver aviso legal importante</Text>
            <Text style={styles.disclaimerBtnArrow}>›</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bg.primary },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 40, paddingTop: 60 },

  // Decorative circles
  circle: { position: 'absolute', borderRadius: 999, opacity: 0.08 },
  circleTop: {
    width: 300, height: 300, top: -80, right: -60,
    backgroundColor: Colors.gradient.purple[0],
  },
  circleBottom: {
    width: 200, height: 200, bottom: 100, left: -50,
    backgroundColor: Colors.gradient.blue[0],
  },

  // Header
  header: { alignItems: 'center', marginBottom: 24 },
  iconWrapper: {
    width: 80, height: 80, borderRadius: 24,
    backgroundColor: 'rgba(124,58,237,0.2)',
    justifyContent: 'center', alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1, borderColor: 'rgba(124,58,237,0.4)',
  },
  iconEmoji: { fontSize: 40 },
  appName: { fontSize: 36, fontWeight: '800', color: Colors.text.primary, letterSpacing: -1 },
  tagline: { fontSize: 15, color: Colors.text.secondary, marginTop: 4 },

  // Chips
  chips: { flexDirection: 'row', justifyContent: 'center', gap: 8, marginBottom: 24, flexWrap: 'wrap' },
  chip: {
    flexDirection: 'row', alignItems: 'center', gap: 4,
    backgroundColor: Colors.bg.glass,
    borderWidth: 1, borderColor: Colors.bg.glassBorder,
    paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20,
  },
  chipEmoji: { fontSize: 14 },
  chipText: { fontSize: 12, color: Colors.text.secondary },

  // Hero card
  heroCard: { borderRadius: 16, overflow: 'hidden', marginBottom: 28, borderWidth: 1, borderColor: 'rgba(124,58,237,0.2)' },
  heroCardGradient: { padding: 20 },
  heroTitle: { fontSize: 22, fontWeight: '700', color: Colors.text.primary, marginBottom: 8 },
  heroDesc: { fontSize: 14, color: Colors.text.secondary, lineHeight: 22 },

  // Section title
  sectionTitle: { fontSize: 18, fontWeight: '700', color: Colors.text.primary, marginBottom: 14 },

  // Test card
  testCard: { borderRadius: 20, overflow: 'hidden', marginBottom: 16, elevation: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8 },
  testCardGradient: { padding: 20 },
  testCardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  testCardTag: { backgroundColor: 'rgba(255,255,255,0.1)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  testCardTagText: { fontSize: 11, fontWeight: '700', letterSpacing: 1 },
  testCardEmoji: { fontSize: 28 },
  testCardTitle: { fontSize: 20, fontWeight: '800', color: '#fff', marginBottom: 6 },
  testCardSubtitle: { fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 19, marginBottom: 14 },
  testCardMeta: { flexDirection: 'row', gap: 16, marginBottom: 14 },
  testCardMetaItem: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  testCardMetaIcon: { fontSize: 13 },
  testCardMetaText: { fontSize: 12, color: 'rgba(255,255,255,0.7)' },
  startBtn: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingVertical: 10, paddingHorizontal: 16,
    borderRadius: 12, alignSelf: 'flex-start',
    borderWidth: 1, borderColor: 'rgba(255,255,255,0.2)',
  },
  startBtnText: { color: '#fff', fontWeight: '700', fontSize: 14 },

  // About section
  aboutSection: {
    backgroundColor: Colors.bg.card,
    borderRadius: 16, padding: 18, marginBottom: 16,
    borderWidth: 1, borderColor: Colors.bg.glassBorder,
  },
  aboutTitle: { fontSize: 15, fontWeight: '700', color: Colors.text.primary, marginBottom: 14 },
  aboutItem: { flexDirection: 'row', gap: 12, marginBottom: 14 },
  aboutEmoji: { fontSize: 22, width: 28, textAlign: 'center' },
  aboutContent: { flex: 1 },
  aboutLabel: { fontSize: 13, fontWeight: '700', color: Colors.text.accent, marginBottom: 4 },
  aboutText: { fontSize: 12, color: Colors.text.secondary, lineHeight: 18 },

  // Disclaimer button
  disclaimerBtn: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: 'rgba(239,68,68,0.08)',
    borderWidth: 1, borderColor: 'rgba(239,68,68,0.25)',
    borderRadius: 12, padding: 14, gap: 8,
  },
  disclaimerBtnIcon: { fontSize: 18 },
  disclaimerBtnText: { flex: 1, fontSize: 13, color: '#FCA5A5' },
  disclaimerBtnArrow: { fontSize: 18, color: '#FCA5A5' },
});
