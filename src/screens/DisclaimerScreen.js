// src/screens/DisclaimerScreen.js
import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../theme/colors';

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const Point = ({ icon, text }) => (
  <View style={styles.point}>
    <Text style={styles.pointIcon}>{icon}</Text>
    <Text style={styles.pointText}>{text}</Text>
  </View>
);

export default function DisclaimerScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.bg.primary} />
      <LinearGradient colors={[Colors.bg.primary, Colors.bg.secondary]} style={StyleSheet.absoluteFillObject} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Volver</Text>
        </TouchableOpacity>
        <View style={styles.headerIcon}>
          <Text style={styles.headerIconEmoji}>⚖️</Text>
        </View>
        <Text style={styles.headerTitle}>Aviso Legal</Text>
        <Text style={styles.headerSubtitle}>Información importante sobre los resultados</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

        {/* Main Disclaimer Box */}
        <View style={styles.mainDisclaimer}>
          <LinearGradient
            colors={['rgba(239,68,68,0.15)', 'rgba(239,68,68,0.05)']}
            style={styles.mainDisclaimerGradient}
          >
            <Text style={styles.mainDisclaimerIcon}>⚠️</Text>
            <Text style={styles.mainDisclaimerTitle}>DECLARACIÓN IMPORTANTE</Text>
            <Text style={styles.mainDisclaimerText}>
              Los resultados de los tests contenidos en esta aplicación son{' '}
              <Text style={styles.bold}>aproximados, orientativos y NO concluyentes</Text>.
              Bajo ninguna circunstancia deben utilizarse como criterio único o definitivo para
              decisiones de carácter médico, clínico, educativo oficial, laboral, psicológico,
              legal o de cualquier otra naturaleza vinculante.
            </Text>
          </LinearGradient>
        </View>

        <Section title="📋 Naturaleza de los resultados">
          <Point
            icon="🔬"
            text="Los tests están basados en modelos teóricos ampliamente reconocidos en psicología educativa (VARK, Inteligencias Múltiples de Gardner), pero son herramientas de auto-reflexión, NO diagnósticos clínicos."
          />
          <Point
            icon="📊"
            text="Los resultados son una fotografía aproximada de las tendencias y preferencias de aprendizaje en el momento de la evaluación y pueden variar con el tiempo."
          />
          <Point
            icon="🎯"
            text="Estos tests tienen un propósito orientativo y de autoconocimiento. NO sustituyen la evaluación de un profesional cualificado (psicólogo, pedagogo, neuropsicólogo)."
          />
        </Section>

        <Section title="🚫 Limitaciones y usos no permitidos">
          <Point
            icon="❌"
            text="Los resultados NO deben usarse como base para diagnósticos de trastornos del aprendizaje (dislexia, TDAH, TEA u otros)."
          />
          <Point
            icon="❌"
            text="No deben utilizarse en procesos legales, judiciales, médicos, de selección de personal o evaluaciones académicas oficiales."
          />
          <Point
            icon="❌"
            text="Los resultados NO definen las capacidades intelectuales absolutas de una persona, ni determinan su éxito o fracaso en cualquier ámbito."
          />
          <Point
            icon="❌"
            text="Esta aplicación NO proporciona consejo médico, psicológico, psiquiátrico ni terapéutico de ningún tipo."
          />
        </Section>

        <Section title="✅ Usos recomendados">
          <Point icon="✔️" text="Reflexión personal sobre preferencias y hábitos de aprendizaje." />
          <Point icon="✔️" text="Orientación inicial para explorar estrategias de estudio más eficaces." />
          <Point icon="✔️" text="Punto de partida para conversaciones con educadores o tutores académicos." />
          <Point icon="✔️" text="Herramienta de autoconocimiento con fines de desarrollo personal." />
        </Section>

        <Section title="📱 Sobre la aplicación">
          <Text style={styles.bodyText}>
            LearnIQ es una aplicación de orientación educativa con fines informativos y de
            desarrollo personal. El equipo de desarrollo ha diseñado los tests con rigor y
            siguiendo marcos teóricos reconocidos, pero no puede garantizar la exactitud absoluta
            de los resultados, ya que estos dependen de múltiples factores individuales, culturales
            y contextuales que escapan al alcance de cualquier test de auto-reporte.
          </Text>
        </Section>

        <Section title="🔒 Privacidad de datos">
          <Point icon="🛡️" text="Los resultados de los tests se almacenan únicamente en tu dispositivo y NO se transmiten a servidores externos." />
          <Point icon="🔐" text="La aplicación no recopila datos personales identificables sin tu consentimiento explícito." />
          <Point icon="👤" text="Puedes borrar tu historial de resultados en cualquier momento desde la configuración de la app." />
        </Section>

        <Section title="⚖️ Exoneración de responsabilidad">
          <Text style={styles.bodyText}>
            Los desarrolladores y distribuidores de LearnIQ quedan exonerados de toda
            responsabilidad derivada del uso o interpretación incorrecta de los resultados
            generados por los tests. El uso de esta aplicación implica la aceptación plena
            de los términos aquí expuestos.{'\n\n'}
            Si experimentas dificultades significativas de aprendizaje, emocionales o cognitivas,
            te recomendamos consultar con un profesional de la salud mental o educativa debidamente
            cualificado.
          </Text>
        </Section>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Versión 1.0.0 • LearnIQ © 2025</Text>
          <Text style={styles.footerText}>Basado en el modelo VARK (Neil Fleming) y las Inteligencias Múltiples (Howard Gardner)</Text>
        </View>

        <TouchableOpacity style={styles.acceptBtn} onPress={() => navigation.goBack()}>
          <LinearGradient colors={['#7C3AED', '#5B21B6']} style={styles.acceptBtnGradient}>
            <Text style={styles.acceptBtnText}>Entendido — Volver al inicio</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bg.primary },
  header: { alignItems: 'center', paddingTop: 50, paddingBottom: 20, paddingHorizontal: 20 },
  backBtn: { alignSelf: 'flex-start', marginBottom: 16 },
  backBtnText: { color: Colors.text.accent, fontSize: 15 },
  headerIcon: {
    width: 64, height: 64, borderRadius: 20,
    backgroundColor: 'rgba(239,68,68,0.15)',
    justifyContent: 'center', alignItems: 'center', marginBottom: 10,
    borderWidth: 1, borderColor: 'rgba(239,68,68,0.3)',
  },
  headerIconEmoji: { fontSize: 32 },
  headerTitle: { fontSize: 26, fontWeight: '800', color: Colors.text.primary },
  headerSubtitle: { fontSize: 14, color: Colors.text.secondary, marginTop: 4 },

  content: { paddingHorizontal: 20, paddingBottom: 40 },

  mainDisclaimer: {
    borderRadius: 16, overflow: 'hidden', marginBottom: 24,
    borderWidth: 1, borderColor: 'rgba(239,68,68,0.3)',
  },
  mainDisclaimerGradient: { padding: 20, alignItems: 'center' },
  mainDisclaimerIcon: { fontSize: 32, marginBottom: 8 },
  mainDisclaimerTitle: {
    fontSize: 13, fontWeight: '800', color: '#FCA5A5',
    letterSpacing: 1.5, marginBottom: 12,
  },
  mainDisclaimerText: { fontSize: 14, color: '#FEE2E2', lineHeight: 22, textAlign: 'center' },
  bold: { fontWeight: '800' },

  section: { marginBottom: 24 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: Colors.text.primary, marginBottom: 12 },
  point: {
    flexDirection: 'row', gap: 10, marginBottom: 10,
    backgroundColor: Colors.bg.glass, borderRadius: 10, padding: 12,
    borderWidth: 1, borderColor: Colors.bg.glassBorder,
  },
  pointIcon: { fontSize: 16, width: 24, textAlign: 'center', marginTop: 1 },
  pointText: { flex: 1, fontSize: 13, color: Colors.text.secondary, lineHeight: 20 },

  bodyText: { fontSize: 13, color: Colors.text.secondary, lineHeight: 21 },

  footer: { alignItems: 'center', marginBottom: 20 },
  footerText: { fontSize: 11, color: Colors.text.muted, textAlign: 'center', marginBottom: 4 },

  acceptBtn: { borderRadius: 14, overflow: 'hidden' },
  acceptBtnGradient: { paddingVertical: 16, alignItems: 'center' },
  acceptBtnText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});
