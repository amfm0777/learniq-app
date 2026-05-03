// src/screens/DisclaimerScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../theme/colors';
import T from '../strings';

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
  const d = T.disclaimer;
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.bg.primary} />
      <LinearGradient colors={[Colors.bg.primary, Colors.bg.secondary]} style={StyleSheet.absoluteFillObject} />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>{d.back}</Text>
        </TouchableOpacity>
        <View style={styles.headerIcon}>
          <Text style={styles.headerIconEmoji}>⚖️</Text>
        </View>
        <Text style={styles.headerTitle}>{d.headerTitle}</Text>
        <Text style={styles.headerSubtitle}>{d.headerSubtitle}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.mainDisclaimer}>
          <LinearGradient colors={['rgba(239,68,68,0.15)', 'rgba(239,68,68,0.05)']} style={styles.mainDisclaimerGradient}>
            <Text style={styles.mainDisclaimerIcon}>⚠️</Text>
            <Text style={styles.mainDisclaimerTitle}>{d.mainTitle}</Text>
            <Text style={styles.mainDisclaimerText}>
              {d.mainText1}<Text style={styles.bold}>{d.mainBold}</Text>{d.mainText2}
            </Text>
          </LinearGradient>
        </View>

        <Section title={d.s1Title}>
          <Point icon="🔬" text={d.s1p1} />
          <Point icon="📊" text={d.s1p2} />
          <Point icon="🎯" text={d.s1p3} />
        </Section>

        <Section title={d.s2Title}>
          <Point icon="❌" text={d.s2p1} />
          <Point icon="❌" text={d.s2p2} />
          <Point icon="❌" text={d.s2p3} />
          <Point icon="❌" text={d.s2p4} />
        </Section>

        <Section title={d.s3Title}>
          <Point icon="✔️" text={d.s3p1} />
          <Point icon="✔️" text={d.s3p2} />
          <Point icon="✔️" text={d.s3p3} />
          <Point icon="✔️" text={d.s3p4} />
        </Section>

        <Section title={d.s4Title}>
          <Text style={styles.bodyText}>{d.s4Text}</Text>
        </Section>

        <Section title={d.s5Title}>
          <Point icon="🛡️" text={d.s5p1} />
          <Point icon="🔐" text={d.s5p2} />
          <Point icon="👤" text={d.s5p3} />
        </Section>

        <Section title={d.s6Title}>
          <Text style={styles.bodyText}>{d.s6Text}</Text>
        </Section>

        <View style={styles.footer}>
          <Text style={styles.footerText}>{d.footer1}</Text>
          <Text style={styles.footerText}>{d.footer2}</Text>
        </View>

        <TouchableOpacity style={styles.acceptBtn} onPress={() => navigation.goBack()}>
          <LinearGradient colors={['#7C3AED', '#5B21B6']} style={styles.acceptBtnGradient}>
            <Text style={styles.acceptBtnText}>{d.acceptBtn}</Text>
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
  headerIcon: { width: 64, height: 64, borderRadius: 20, backgroundColor: 'rgba(239,68,68,0.15)', justifyContent: 'center', alignItems: 'center', marginBottom: 10, borderWidth: 1, borderColor: 'rgba(239,68,68,0.3)' },
  headerIconEmoji: { fontSize: 32 },
  headerTitle: { fontSize: 26, fontWeight: '800', color: Colors.text.primary },
  headerSubtitle: { fontSize: 14, color: Colors.text.secondary, marginTop: 4 },
  content: { paddingHorizontal: 20, paddingBottom: 40 },
  mainDisclaimer: { borderRadius: 16, overflow: 'hidden', marginBottom: 24, borderWidth: 1, borderColor: 'rgba(239,68,68,0.3)' },
  mainDisclaimerGradient: { padding: 20, alignItems: 'center' },
  mainDisclaimerIcon: { fontSize: 32, marginBottom: 8 },
  mainDisclaimerTitle: { fontSize: 13, fontWeight: '800', color: '#FCA5A5', letterSpacing: 1.5, marginBottom: 12 },
  mainDisclaimerText: { fontSize: 14, color: '#FEE2E2', lineHeight: 22, textAlign: 'center' },
  bold: { fontWeight: '800' },
  section: { marginBottom: 24 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: Colors.text.primary, marginBottom: 12 },
  point: { flexDirection: 'row', gap: 10, marginBottom: 10, backgroundColor: Colors.bg.glass, borderRadius: 10, padding: 12, borderWidth: 1, borderColor: Colors.bg.glassBorder },
  pointIcon: { fontSize: 16, width: 24, textAlign: 'center', marginTop: 1 },
  pointText: { flex: 1, fontSize: 13, color: Colors.text.secondary, lineHeight: 20 },
  bodyText: { fontSize: 13, color: Colors.text.secondary, lineHeight: 21 },
  footer: { alignItems: 'center', marginBottom: 20 },
  footerText: { fontSize: 11, color: Colors.text.muted, textAlign: 'center', marginBottom: 4 },
  acceptBtn: { borderRadius: 14, overflow: 'hidden' },
  acceptBtnGradient: { paddingVertical: 16, alignItems: 'center' },
  acceptBtnText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});
