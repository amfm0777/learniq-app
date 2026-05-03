// src/screens/BasicResultScreen.js
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../theme/colors';
import { BASIC_RESULTS } from '../data/basicTest';
import T from '../strings';

const AnimatedBar = ({ percentage, color, delay }) => {
  const widthAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    setTimeout(() => {
      Animated.timing(widthAnim, { toValue: percentage, duration: 800, useNativeDriver: false }).start();
    }, delay);
  }, []);
  return (
    <View style={barStyles.container}>
      <Animated.View style={[barStyles.bar, { width: widthAnim.interpolate({ inputRange: [0, 100], outputRange: ['0%', '100%'] }), backgroundColor: color }]} />
    </View>
  );
};

const barStyles = StyleSheet.create({
  container: { height: 10, backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 5, overflow: 'hidden' },
  bar: { height: '100%', borderRadius: 5 },
});

export default function BasicResultScreen({ navigation, route }) {
  const { counts, total } = route.params;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;
  const dominant = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  const result = BASIC_RESULTS[dominant];
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);

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
            <Text style={styles.completedText}>{T.basicResult.completed}</Text>
          </View>

          <View style={styles.resultHero}>
            <LinearGradient colors={result.gradient} style={styles.resultHeroGradient}>
              <Text style={styles.resultEmoji}>{result.emoji}</Text>
              <Text style={styles.resultLabel}>{T.basicResult.resultLabel}</Text>
              <Text style={styles.resultTitle}>{result.title}</Text>
            </LinearGradient>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>{T.basicResult.whatMeans}</Text>
            <Text style={styles.cardText}>{result.description}</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>{T.basicResult.profile}</Text>
            {sorted.map(([cat, count], i) => {
              const r = BASIC_RESULTS[cat];
              const pct = Math.round((count / total) * 100);
              return (
                <View key={cat} style={styles.barRow}>
                  <View style={styles.barLabel}>
                    <Text style={styles.barEmoji}>{r.emoji}</Text>
                    <Text style={styles.barName}>{r.label}</Text>
                    <Text style={[styles.barPct, { color: r.color }]}>{pct}%</Text>
                  </View>
                  <AnimatedBar percentage={pct} color={r.color} delay={i * 150} />
                </View>
              );
            })}
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>{T.basicResult.strengths}</Text>
            {result.strengths.map((s, i) => (
              <View key={i} style={styles.listItem}>
                <View style={[styles.dot, { backgroundColor: result.color }]} />
                <Text style={styles.listText}>{s}</Text>
              </View>
            ))}
          </View>

          <View style={[styles.card, { borderColor: result.color + '30' }]}>
            <Text style={styles.cardTitle}>{T.basicResult.strategies}</Text>
            {result.tips.map((tip, i) => (
              <View key={i} style={styles.tipItem}>
                <Text style={[styles.tipNum, { backgroundColor: result.color + '20', color: result.color }]}>{i + 1}</Text>
                <Text style={styles.listText}>{tip}</Text>
              </View>
            ))}
          </View>

          <View style={styles.disclaimerBox}>
            <Text style={styles.disclaimerIcon}>⚠️</Text>
            <Text style={styles.disclaimerText}>
              {T.basicResult.disclaimerText}
              <Text style={styles.disclaimerBold}>{T.basicResult.disclaimerBold}</Text>
              {T.basicResult.disclaimerText2}{' '}
              <Text style={styles.disclaimerLink} onPress={() => navigation.navigate('Disclaimer')}>
                {T.basicResult.disclaimerLink}
              </Text>
            </Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('PremiumIntro')} style={styles.premiumBtn}>
            <LinearGradient colors={['#7C2020', '#8B4513']} style={styles.premiumBtnGradient}>
              <Text style={styles.premiumBtnEmoji}>⭐</Text>
              <View style={styles.premiumBtnContent}>
                <Text style={styles.premiumBtnTitle}>{T.basicResult.premiumTitle}</Text>
                <Text style={styles.premiumBtnSub}>{T.basicResult.premiumSub}</Text>
              </View>
              <Text style={styles.premiumBtnArrow}>›</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeBtn}>
            <Text style={styles.homeBtnText}>{T.basicResult.backHome}</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bg.primary },
  content: { padding: 20, paddingTop: 50, paddingBottom: 40 },
  completedBadge: { alignSelf: 'center', backgroundColor: 'rgba(16,185,129,0.15)', borderRadius: 20, paddingHorizontal: 16, paddingVertical: 6, marginBottom: 16, borderWidth: 1, borderColor: 'rgba(16,185,129,0.3)' },
  completedText: { fontSize: 13, color: Colors.success, fontWeight: '700' },
  resultHero: { borderRadius: 20, overflow: 'hidden', marginBottom: 16 },
  resultHeroGradient: { padding: 32, alignItems: 'center' },
  resultEmoji: { fontSize: 52, marginBottom: 8 },
  resultLabel: { fontSize: 12, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 6 },
  resultTitle: { fontSize: 28, fontWeight: '800', color: '#fff' },
  card: { backgroundColor: Colors.bg.card, borderRadius: 16, padding: 18, marginBottom: 14, borderWidth: 1, borderColor: Colors.bg.glassBorder },
  cardTitle: { fontSize: 15, fontWeight: '700', color: Colors.text.primary, marginBottom: 12 },
  cardText: { fontSize: 14, color: Colors.text.secondary, lineHeight: 22 },
  barRow: { marginBottom: 12 },
  barLabel: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 6 },
  barEmoji: { fontSize: 16 },
  barName: { flex: 1, fontSize: 13, color: Colors.text.secondary },
  barPct: { fontSize: 14, fontWeight: '700' },
  listItem: { flexDirection: 'row', alignItems: 'flex-start', gap: 10, marginBottom: 8 },
  dot: { width: 6, height: 6, borderRadius: 3, marginTop: 7, flexShrink: 0 },
  listText: { flex: 1, fontSize: 13, color: Colors.text.secondary, lineHeight: 20 },
  tipItem: { flexDirection: 'row', alignItems: 'flex-start', gap: 10, marginBottom: 8 },
  tipNum: { width: 22, height: 22, borderRadius: 6, textAlign: 'center', lineHeight: 22, fontSize: 12, fontWeight: '800', flexShrink: 0, overflow: 'hidden' },
  disclaimerBox: { flexDirection: 'row', gap: 8, backgroundColor: 'rgba(239,68,68,0.08)', borderRadius: 12, padding: 14, marginBottom: 16, borderWidth: 1, borderColor: 'rgba(239,68,68,0.2)' },
  disclaimerIcon: { fontSize: 16 },
  disclaimerText: { flex: 1, fontSize: 12, color: '#FCA5A5', lineHeight: 18 },
  disclaimerBold: { fontWeight: '800' },
  disclaimerLink: { fontWeight: '700', textDecorationLine: 'underline' },
  premiumBtn: { borderRadius: 16, overflow: 'hidden', marginBottom: 14 },
  premiumBtnGradient: { flexDirection: 'row', alignItems: 'center', padding: 16, gap: 12 },
  premiumBtnEmoji: { fontSize: 24 },
  premiumBtnContent: { flex: 1 },
  premiumBtnTitle: { fontSize: 15, fontWeight: '700', color: '#fff', marginBottom: 2 },
  premiumBtnSub: { fontSize: 12, color: 'rgba(255,255,255,0.7)' },
  premiumBtnArrow: { fontSize: 22, color: '#F59E0B' },
  homeBtn: { alignItems: 'center', paddingVertical: 14 },
  homeBtnText: { color: Colors.text.accent, fontSize: 15 },
});
