// src/screens/BasicIntroScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../theme/colors';
import { BASIC_TEST_INTRO } from '../data/basicTest';

const StyleBadge = ({ letter, label, color, emoji }) => (
  <View style={[styles.badge, { borderColor: color + '50' }]}>
    <LinearGradient colors={[color + '30', color + '10']} style={styles.badgeGradient}>
      <Text style={styles.badgeEmoji}>{emoji}</Text>
      <View style={[styles.badgeLetter, { backgroundColor: color }]}>
        <Text style={styles.badgeLetterText}>{letter}</Text>
      </View>
      <Text style={styles.badgeLabel}>{label}</Text>
    </LinearGradient>
  </View>
);

export default function BasicIntroScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient colors={[Colors.bg.primary, Colors.bg.secondary]} style={StyleSheet.absoluteFillObject} />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Back */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Inicio</Text>
        </TouchableOpacity>

        {/* Hero */}
        <View style={styles.hero}>
          <LinearGradient colors={['#1E1060', '#2D1B8B']} style={styles.heroBg}>
            <Text style={styles.heroEmoji}>🎓</Text>
            <Text style={styles.heroTitle}>{BASIC_TEST_INTRO.title}</Text>
            <Text style={styles.heroSubtitle}>{BASIC_TEST_INTRO.subtitle}</Text>
          </LinearGradient>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{BASIC_TEST_INTRO.questions}</Text>
            <Text style={styles.statLabel}>Preguntas</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{BASIC_TEST_INTRO.duration}</Text>
            <Text style={styles.statLabel}>Duración</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>4</Text>
            <Text style={styles.statLabel}>Estilos</Text>
          </View>
        </View>

        {/* Description */}
        <View style={styles.descCard}>
          <Text style={styles.descTitle}>¿Qué mide este test?</Text>
          <Text style={styles.descText}>{BASIC_TEST_INTRO.description}</Text>
        </View>

        {/* VARK Styles */}
        <Text style={styles.sectionTitle}>Los 4 estilos VARK</Text>
        <View style={styles.badgesGrid}>
          <StyleBadge letter="V" label="Visual" color={Colors.styles.visual} emoji="👁️" />
          <StyleBadge letter="A" label="Auditivo" color={Colors.styles.auditory} emoji="🎧" />
          <StyleBadge letter="R" label="Lecto-escritor" color={Colors.styles.reading} emoji="📚" />
          <StyleBadge letter="K" label="Kinestésico" color={Colors.styles.kinesthetic} emoji="🤲" />
        </View>

        {/* Instructions */}
        <View style={styles.instructCard}>
          <Text style={styles.instructTitle}>📋 Cómo responder</Text>
          <Text style={styles.instructText}>
            Para cada pregunta, elige la opción que mejor describe tu comportamiento habitual.
            No hay respuestas correctas o incorrectas — sé honesto/a contigo mismo/a.
          </Text>
          <Text style={styles.instructText}>
            El test incluye la visualización de resultados con tu porcentaje en cada estilo
            y recomendaciones personalizadas.
          </Text>
        </View>

        {/* Disclaimer mini */}
        <View style={styles.disclaimerMini}>
          <Text style={styles.disclaimerMiniIcon}>⚠️</Text>
          <Text style={styles.disclaimerMiniText}>
            Los resultados son orientativos y no concluyentes para fines legales, médicos o educativos formales.{' '}
            <Text style={styles.disclaimerLink} onPress={() => navigation.navigate('Disclaimer')}>
              Ver aviso completo
            </Text>
          </Text>
        </View>

        {/* CTA */}
        <TouchableOpacity onPress={() => navigation.navigate('BasicTest')} style={styles.ctaBtn}>
          <LinearGradient colors={['#7C3AED', '#3B82F6']} style={styles.ctaBtnGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
            <Text style={styles.ctaBtnText}>🚀 Comenzar Test Básico</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bg.primary },
  content: { padding: 20, paddingTop: 50, paddingBottom: 40 },

  backBtn: { marginBottom: 20 },
  backBtnText: { color: Colors.text.accent, fontSize: 15 },

  hero: { borderRadius: 20, overflow: 'hidden', marginBottom: 16 },
  heroBg: { padding: 28, alignItems: 'center' },
  heroEmoji: { fontSize: 48, marginBottom: 10 },
  heroTitle: { fontSize: 24, fontWeight: '800', color: '#fff', textAlign: 'center', marginBottom: 6 },
  heroSubtitle: { fontSize: 14, color: 'rgba(255,255,255,0.7)', textAlign: 'center' },

  statsRow: { flexDirection: 'row', gap: 10, marginBottom: 16 },
  statCard: {
    flex: 1, backgroundColor: Colors.bg.card, borderRadius: 14, padding: 14,
    alignItems: 'center', borderWidth: 1, borderColor: Colors.bg.glassBorder,
  },
  statValue: { fontSize: 20, fontWeight: '800', color: Colors.text.primary, marginBottom: 2 },
  statLabel: { fontSize: 11, color: Colors.text.secondary },

  descCard: {
    backgroundColor: Colors.bg.card, borderRadius: 14, padding: 16,
    marginBottom: 20, borderWidth: 1, borderColor: Colors.bg.glassBorder,
  },
  descTitle: { fontSize: 15, fontWeight: '700', color: Colors.text.primary, marginBottom: 8 },
  descText: { fontSize: 13, color: Colors.text.secondary, lineHeight: 20 },

  sectionTitle: { fontSize: 16, fontWeight: '700', color: Colors.text.primary, marginBottom: 12 },

  badgesGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 20 },
  badge: { width: '47%', borderRadius: 14, overflow: 'hidden', borderWidth: 1 },
  badgeGradient: { padding: 14, alignItems: 'center', gap: 6 },
  badgeEmoji: { fontSize: 24 },
  badgeLetter: { width: 28, height: 28, borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  badgeLetterText: { color: '#fff', fontWeight: '800', fontSize: 16 },
  badgeLabel: { fontSize: 13, fontWeight: '600', color: Colors.text.primary },

  instructCard: {
    backgroundColor: 'rgba(59,130,246,0.1)', borderRadius: 14, padding: 16,
    marginBottom: 16, borderWidth: 1, borderColor: 'rgba(59,130,246,0.2)',
  },
  instructTitle: { fontSize: 15, fontWeight: '700', color: Colors.text.primary, marginBottom: 8 },
  instructText: { fontSize: 13, color: Colors.text.secondary, lineHeight: 20, marginBottom: 8 },

  disclaimerMini: {
    flexDirection: 'row', gap: 8, alignItems: 'flex-start',
    backgroundColor: 'rgba(239,68,68,0.08)', borderRadius: 12, padding: 12,
    borderWidth: 1, borderColor: 'rgba(239,68,68,0.2)', marginBottom: 20,
  },
  disclaimerMiniIcon: { fontSize: 16 },
  disclaimerMiniText: { flex: 1, fontSize: 12, color: '#FCA5A5', lineHeight: 18 },
  disclaimerLink: { fontWeight: '700', textDecorationLine: 'underline' },

  ctaBtn: { borderRadius: 16, overflow: 'hidden' },
  ctaBtnGradient: { paddingVertical: 18, alignItems: 'center' },
  ctaBtnText: { color: '#fff', fontWeight: '800', fontSize: 17 },
});
