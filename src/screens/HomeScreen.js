// src/screens/HomeScreen.js
import React, { useEffect, useRef } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView,
  Animated, StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../theme/colors';
import T from '../strings';

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
  const handlePressIn = () => Animated.spring(scaleAnim, { toValue: 0.97, useNativeDriver: true }).start();
  const handlePressOut = () => Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true }).start();

  return (
    <TouchableOpacity onPress={onPress} onPressIn={handlePressIn} onPressOut={handlePressOut} activeOpacity={1}>
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
              <Text style={styles.testCardMetaText}>{T.home.questions(questions)}</Text>
            </View>
          </View>
          <View style={styles.startBtn}>
            <Text style={styles.startBtnText}>{T.home.startBtn}</Text>
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
      <View style={[styles.circle, styles.circleTop]} />
      <View style={[styles.circle, styles.circleBottom]} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
          <View style={styles.header}>
            <BrainIcon />
            <Text style={styles.appName}>LearnIQ</Text>
            <Text style={styles.tagline}>{T.home.tagline}</Text>
          </View>

          <View style={styles.chips}>
            <FeatureChip emoji="🎯" text={T.home.chip1} />
            <FeatureChip emoji="📊" text={T.home.chip2} />
            <FeatureChip emoji="🚀" text={T.home.chip3} />
          </View>

          <View style={styles.heroCard}>
            <LinearGradient colors={['rgba(124,58,237,0.15)', 'rgba(59,130,246,0.08)']} style={styles.heroCardGradient}>
              <Text style={styles.heroTitle}>{T.home.heroTitle}</Text>
              <Text style={styles.heroDesc}>{T.home.heroDesc}</Text>
            </LinearGradient>
          </View>

          <Text style={styles.sectionTitle}>{T.home.sectionTitle}</Text>

          <TestCard
            title={T.home.basicCard.title}
            subtitle={T.home.basicCard.subtitle}
            emoji="🎓"
            duration={T.home.basicCard.duration}
            questions={20}
            gradient={['#1E1060', '#2D1B8B']}
            tag={T.home.basicCard.tag}
            tagColor="#A78BFA"
            onPress={() => navigation.navigate('BasicIntro')}
          />

          <TestCard
            title={T.home.premiumCard.title}
            subtitle={T.home.premiumCard.subtitle}
            emoji="⭐"
            duration={T.home.premiumCard.duration}
            questions={40}
            gradient={['#7C2020', '#8B4513']}
            tag={T.home.premiumCard.tag}
            tagColor="#F59E0B"
            onPress={() => navigation.navigate('Payment')}
          />

          <View style={styles.aboutSection}>
            <Text style={styles.aboutTitle}>{T.home.aboutTitle}</Text>
            <View style={styles.aboutItem}>
              <Text style={styles.aboutEmoji}>📘</Text>
              <View style={styles.aboutContent}>
                <Text style={styles.aboutLabel}>{T.home.aboutBasicLabel}</Text>
                <Text style={styles.aboutText}>{T.home.aboutBasicText}</Text>
              </View>
            </View>
            <View style={styles.aboutItem}>
              <Text style={styles.aboutEmoji}>🏆</Text>
              <View style={styles.aboutContent}>
                <Text style={styles.aboutLabel}>{T.home.aboutPremiumLabel}</Text>
                <Text style={styles.aboutText}>{T.home.aboutPremiumText}</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Disclaimer')} style={styles.disclaimerBtn}>
            <Text style={styles.disclaimerBtnIcon}>⚖️</Text>
            <Text style={styles.disclaimerBtnText}>{T.home.disclaimerBtn}</Text>
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
  circle: { position: 'absolute', borderRadius: 999, opacity: 0.08 },
  circleTop: { width: 300, height: 300, top: -80, right: -60, backgroundColor: Colors.gradient.purple[0] },
  circleBottom: { width: 200, height: 200, bottom: 100, left: -50, backgroundColor: Colors.gradient.blue[0] },
  header: { alignItems: 'center', marginBottom: 24 },
  iconWrapper: { width: 80, height: 80, borderRadius: 24, backgroundColor: 'rgba(124,58,237,0.2)', justifyContent: 'center', alignItems: 'center', marginBottom: 12, borderWidth: 1, borderColor: 'rgba(124,58,237,0.4)' },
  iconEmoji: { fontSize: 40 },
  appName: { fontSize: 36, fontWeight: '800', color: Colors.text.primary, letterSpacing: -1 },
  tagline: { fontSize: 15, color: Colors.text.secondary, marginTop: 4 },
  chips: { flexDirection: 'row', justifyContent: 'center', gap: 8, marginBottom: 24, flexWrap: 'wrap' },
  chip: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: Colors.bg.glass, borderWidth: 1, borderColor: Colors.bg.glassBorder, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  chipEmoji: { fontSize: 14 },
  chipText: { fontSize: 12, color: Colors.text.secondary },
  heroCard: { borderRadius: 16, overflow: 'hidden', marginBottom: 28, borderWidth: 1, borderColor: 'rgba(124,58,237,0.2)' },
  heroCardGradient: { padding: 20 },
  heroTitle: { fontSize: 22, fontWeight: '700', color: Colors.text.primary, marginBottom: 8 },
  heroDesc: { fontSize: 14, color: Colors.text.secondary, lineHeight: 22 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: Colors.text.primary, marginBottom: 14 },
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
  startBtn: { backgroundColor: 'rgba(255,255,255,0.15)', paddingVertical: 10, paddingHorizontal: 16, borderRadius: 12, alignSelf: 'flex-start', borderWidth: 1, borderColor: 'rgba(255,255,255,0.2)' },
  startBtnText: { color: '#fff', fontWeight: '700', fontSize: 14 },
  aboutSection: { backgroundColor: Colors.bg.card, borderRadius: 16, padding: 18, marginBottom: 16, borderWidth: 1, borderColor: Colors.bg.glassBorder },
  aboutTitle: { fontSize: 15, fontWeight: '700', color: Colors.text.primary, marginBottom: 14 },
  aboutItem: { flexDirection: 'row', gap: 12, marginBottom: 14 },
  aboutEmoji: { fontSize: 22, width: 28, textAlign: 'center' },
  aboutContent: { flex: 1 },
  aboutLabel: { fontSize: 13, fontWeight: '700', color: Colors.text.accent, marginBottom: 4 },
  aboutText: { fontSize: 12, color: Colors.text.secondary, lineHeight: 18 },
  disclaimerBtn: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(239,68,68,0.08)', borderWidth: 1, borderColor: 'rgba(239,68,68,0.25)', borderRadius: 12, padding: 14, gap: 8 },
  disclaimerBtnIcon: { fontSize: 18 },
  disclaimerBtnText: { flex: 1, fontSize: 13, color: '#FCA5A5' },
  disclaimerBtnArrow: { fontSize: 18, color: '#FCA5A5' },
});
