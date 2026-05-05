// src/screens/PremiumResultScreen.js
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../theme/colors';
import { PREMIUM_INTELLIGENCES } from '../data/premiumTest';

const MAX_SCORE_PER_INTEL = 25; // 5 questions × max 5 points

export default function PremiumResultScreen({ navigation, route }) {
  const { scores } = route.params;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;

  const sorted = Object.entries(scores)
    .map(([key, score]) => ({
      key,
      score,
      pct: Math.round((score / MAX_SCORE_PER_INTEL) * 100),
    }))
    .sort((a, b) => b.pct - a.pct);

  const dominant = sorted[0];
  const dominantInfo = PREMIUM_INTELLIGENCES[dominant.key];

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 700, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 700, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient colors={[Colors.bg.primary, Colors.bg.secondary]} style={StyleSheet.absoluteFillObject} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>

          <View style={styles.completedBadge}>
            <Text style={styles.completedText}>⭐ Test Premium completado</Text>
          </View>

          <LinearGradient colors={dominantInfo.gradient} style={styles.hero}>
            <Text style={styles.heroEmoji}>{dominantInfo.emoji}</Text>
            <Text style={styles.heroLabel}>Tu inteligencia dominante</Text>
            <Text style={styles.heroTitle}>{dominantInfo.label}</Text>
            <Text style={styles.heroDesc}>{dominantInfo.description}</Text>
          </LinearGradient>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>📊 Tu perfil completo</Text>
            {sorted.map(({ key, pct }) => {
              const info = PREMIUM_INTELLIGENCES[key];
              return (
                <View key={key} style={styles.barRow}>
                  <View style={styles.barLabel}>
                    <Text style={styles.barEmoji}>{info.emoji}</Text>
                    <Text style={styles.barName}>{info.label}</Text>
                    <Text style={[styles.barPct, { color: info.color }]}>{pct}%</Text>
                  </View>
                  <View style={styles.barBg}>
                    <View style={[styles.barFill, { width: `${pct}%`, backgroundColor: info.color }]} />
                  </View>
                </View>
              );
            })}
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>💼 Carreras afines</Text>
            <View style={styles.careersGrid}>
              {dominantInfo.careers.map((career, i) => (
                <View
                  key={i}
                  style={[styles.careerChip, { borderColor: dominantInfo.color + '40', backgroundColor: dominantInfo.color + '15' }]}
                >
                  <Text style={[styles.careerText, { color: dominantInfo.color }]}>{career}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>📚 Estrategias de estudio personalizadas</Text>
            {dominantInfo.studyTips.map((tip, i) => (
              <View key={i} style={styles.tipItem}>
                <Text style={[styles.tipNum, { backgroundColor: dominantInfo.color + '20', color: dominantInfo.color }]}>
                  {i + 1}
                </Text>
                <Text style={styles.tipText}>{tip}</Text>
              </View>
            ))}
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🌟 Personas famosas con tu inteligencia</Text>
            <Text style={styles.famousText}>{dominantInfo.famous}</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeBtn}>
            <Text style={styles.homeBtnText}>← Volver al inicio</Text>
          </TouchableOpacity>

        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bg.primary },
  content: { padding: 20, paddingTop: 50, paddingBottom: 40 },
  completedBadge: {
    alignSelf: 'center', backgroundColor: 'rgba(245,158,11,0.15)', borderRadius: 20,
    paddingHorizontal: 16, paddingVertical: 6, marginBottom: 16,
    borderWidth: 1, borderColor: 'rgba(245,158,11,0.3)',
  },
  completedText: { fontSize: 13, color: Colors.warning, fontWeight: '700' },
  hero: { borderRadius: 20, padding: 28, alignItems: 'center', marginBottom: 16 },
  heroEmoji: { fontSize: 52, marginBottom: 8 },
  heroLabel: {
    fontSize: 12, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase',
    letterSpacing: 1.5, marginBottom: 6,
  },
  heroTitle: { fontSize: 28, fontWeight: '800', color: '#fff', marginBottom: 10 },
  heroDesc: { fontSize: 14, color: 'rgba(255,255,255,0.8)', textAlign: 'center', lineHeight: 20 },
  card: {
    backgroundColor: Colors.bg.card, borderRadius: 16, padding: 18,
    marginBottom: 14, borderWidth: 1, borderColor: Colors.bg.glassBorder,
  },
  cardTitle: { fontSize: 15, fontWeight: '700', color: Colors.text.primary, marginBottom: 14 },
  barRow: { marginBottom: 12 },
  barLabel: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 6 },
  barEmoji: { fontSize: 16 },
  barName: { flex: 1, fontSize: 13, color: Colors.text.secondary },
  barPct: { fontSize: 14, fontWeight: '700' },
  barBg: { height: 8, backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 4, overflow: 'hidden' },
  barFill: { height: '100%', borderRadius: 4 },
  careersGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  careerChip: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, borderWidth: 1 },
  careerText: { fontSize: 13, fontWeight: '600' },
  tipItem: { flexDirection: 'row', alignItems: 'flex-start', gap: 10, marginBottom: 8 },
  tipNum: {
    width: 22, height: 22, borderRadius: 6, textAlign: 'center', lineHeight: 22,
    fontSize: 12, fontWeight: '800', flexShrink: 0, overflow: 'hidden',
  },
  tipText: { flex: 1, fontSize: 13, color: Colors.text.secondary, lineHeight: 20 },
  famousText: { fontSize: 14, color: Colors.text.secondary, fontStyle: 'italic' },
  homeBtn: { alignItems: 'center', paddingVertical: 14, marginTop: 8 },
  homeBtnText: { color: Colors.text.accent, fontSize: 15 },
});
