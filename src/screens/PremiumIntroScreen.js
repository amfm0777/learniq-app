// src/screens/PremiumIntroScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../theme/colors';
import { PREMIUM_TEST_INTRO, PREMIUM_INTELLIGENCES } from '../data/premiumTest';
import T from '../strings';

export default function PremiumIntroScreen({ navigation }) {
  const intelligences = Object.entries(PREMIUM_INTELLIGENCES);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient colors={[Colors.bg.primary, '#1A0A00']} style={StyleSheet.absoluteFillObject} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>{T.premiumIntro.back}</Text>
        </TouchableOpacity>

        <LinearGradient colors={['#7C2020', '#3D0A0A']} style={styles.hero}>
          <View style={styles.premiumBadge}>
            <Text style={styles.premiumBadgeText}>⭐ PREMIUM</Text>
          </View>
          <Text style={styles.heroEmoji}>🧠</Text>
          <Text style={styles.heroTitle}>{PREMIUM_TEST_INTRO.title}</Text>
          <Text style={styles.heroSubtitle}>{PREMIUM_TEST_INTRO.subtitle}</Text>
        </LinearGradient>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{PREMIUM_TEST_INTRO.questions}</Text>
            <Text style={styles.statLabel}>{T.premiumIntro.statsQuestions}</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>8</Text>
            <Text style={styles.statLabel}>{T.premiumIntro.statsIntelligences}</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{PREMIUM_TEST_INTRO.duration}</Text>
            <Text style={styles.statLabel}>{T.premiumIntro.statsDuration}</Text>
          </View>
        </View>

        <View style={styles.includesCard}>
          <Text style={styles.includesTitle}>{T.premiumIntro.includesTitle}</Text>
          {PREMIUM_TEST_INTRO.includes.map((item, i) => (
            <View key={i} style={styles.includeItem}>
              <Text style={styles.includeCheck}>✓</Text>
              <Text style={styles.includeText}>{item}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>{T.premiumIntro.sectionTitle}</Text>
        <View style={styles.intelligenceGrid}>
          {intelligences.map(([key, intel]) => (
            <View key={key} style={[styles.intelCard, { borderColor: intel.color + '40' }]}>
              <LinearGradient colors={[intel.color + '25', intel.color + '08']} style={styles.intelCardGradient}>
                <Text style={styles.intelEmoji}>{intel.emoji}</Text>
                <Text style={[styles.intelLabel, { color: intel.color }]}>{intel.label}</Text>
                <Text style={styles.intelDesc} numberOfLines={2}>{intel.description.substring(0, 60)}...</Text>
              </LinearGradient>
            </View>
          ))}
        </View>

        <View style={styles.scaleCard}>
          <Text style={styles.scaleTitle}>{T.premiumIntro.scaleTitle}</Text>
          <Text style={styles.scaleDesc}>{T.premiumIntro.scaleDesc}</Text>
          <View style={styles.scaleRow}>
            {T.premiumIntro.scaleLabels.map((label, i) => {
              const colors = ['#EF4444', '#F97316', '#F59E0B', '#84CC16', '#10B981'];
              return (
                <View key={i} style={styles.scaleItem}>
                  <View style={[styles.scaleNum, { backgroundColor: colors[i] }]}>
                    <Text style={styles.scaleNumText}>{i + 1}</Text>
                  </View>
                  <Text style={styles.scaleLabel} numberOfLines={2}>{label}</Text>
                </View>
              );
            })}
          </View>
        </View>

        <View style={styles.disclaimerMini}>
          <Text style={styles.disclaimerMiniIcon}>⚠️</Text>
          <Text style={styles.disclaimerMiniText}>
            {T.premiumIntro.disclaimerText}{' '}
            <Text style={styles.disclaimerLink} onPress={() => navigation.navigate('Disclaimer')}>
              {T.premiumIntro.disclaimerLink}
            </Text>
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('PremiumTest')} style={styles.ctaBtn}>
          <LinearGradient colors={['#F59E0B', '#EF4444']} style={styles.ctaBtnGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
            <Text style={styles.ctaBtnText}>{T.premiumIntro.cta}</Text>
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
  hero: { borderRadius: 20, padding: 28, alignItems: 'center', marginBottom: 16 },
  premiumBadge: { backgroundColor: 'rgba(245,158,11,0.2)', borderRadius: 20, paddingHorizontal: 14, paddingVertical: 5, marginBottom: 12, borderWidth: 1, borderColor: 'rgba(245,158,11,0.4)' },
  premiumBadgeText: { fontSize: 12, fontWeight: '800', color: '#F59E0B', letterSpacing: 1 },
  heroEmoji: { fontSize: 52, marginBottom: 10 },
  heroTitle: { fontSize: 24, fontWeight: '800', color: '#fff', textAlign: 'center', marginBottom: 6 },
  heroSubtitle: { fontSize: 14, color: 'rgba(255,255,255,0.7)', textAlign: 'center' },
  statsRow: { flexDirection: 'row', gap: 10, marginBottom: 16 },
  statCard: { flex: 1, backgroundColor: Colors.bg.card, borderRadius: 14, padding: 14, alignItems: 'center', borderWidth: 1, borderColor: Colors.bg.glassBorder },
  statValue: { fontSize: 20, fontWeight: '800', color: Colors.text.primary, marginBottom: 2 },
  statLabel: { fontSize: 11, color: Colors.text.secondary },
  includesCard: { backgroundColor: 'rgba(245,158,11,0.08)', borderRadius: 14, padding: 16, marginBottom: 20, borderWidth: 1, borderColor: 'rgba(245,158,11,0.2)' },
  includesTitle: { fontSize: 15, fontWeight: '700', color: Colors.text.primary, marginBottom: 12 },
  includeItem: { flexDirection: 'row', gap: 10, alignItems: 'flex-start', marginBottom: 8 },
  includeCheck: { fontSize: 14, color: '#F59E0B', fontWeight: '700', width: 18 },
  includeText: { flex: 1, fontSize: 13, color: Colors.text.secondary, lineHeight: 19 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: Colors.text.primary, marginBottom: 12 },
  intelligenceGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 20 },
  intelCard: { width: '47%', borderRadius: 14, overflow: 'hidden', borderWidth: 1 },
  intelCardGradient: { padding: 12, alignItems: 'center', gap: 4 },
  intelEmoji: { fontSize: 24 },
  intelLabel: { fontSize: 12, fontWeight: '700' },
  intelDesc: { fontSize: 10, color: Colors.text.muted, textAlign: 'center', lineHeight: 14 },
  scaleCard: { backgroundColor: Colors.bg.card, borderRadius: 14, padding: 16, marginBottom: 16, borderWidth: 1, borderColor: Colors.bg.glassBorder },
  scaleTitle: { fontSize: 15, fontWeight: '700', color: Colors.text.primary, marginBottom: 6 },
  scaleDesc: { fontSize: 13, color: Colors.text.secondary, marginBottom: 12 },
  scaleRow: { flexDirection: 'row', justifyContent: 'space-between' },
  scaleItem: { alignItems: 'center', flex: 1, gap: 6 },
  scaleNum: { width: 32, height: 32, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  scaleNumText: { color: '#fff', fontWeight: '800', fontSize: 16 },
  scaleLabel: { fontSize: 9, color: Colors.text.muted, textAlign: 'center' },
  disclaimerMini: { flexDirection: 'row', gap: 8, alignItems: 'flex-start', backgroundColor: 'rgba(239,68,68,0.08)', borderRadius: 12, padding: 12, borderWidth: 1, borderColor: 'rgba(239,68,68,0.2)', marginBottom: 20 },
  disclaimerMiniIcon: { fontSize: 16 },
  disclaimerMiniText: { flex: 1, fontSize: 12, color: '#FCA5A5', lineHeight: 18 },
  disclaimerLink: { fontWeight: '700', textDecorationLine: 'underline' },
  ctaBtn: { borderRadius: 16, overflow: 'hidden' },
  ctaBtnGradient: { paddingVertical: 18, alignItems: 'center' },
  ctaBtnText: { color: '#fff', fontWeight: '800', fontSize: 17 },
});
