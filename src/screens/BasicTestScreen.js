// src/screens/BasicTestScreen.js
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../theme/colors';
import { BASIC_QUESTIONS } from '../data/basicTest';
import T from '../strings';

const CATEGORY_COLORS = {
  V: Colors.styles.visual,
  A: Colors.styles.auditory,
  R: Colors.styles.reading,
  K: Colors.styles.kinesthetic,
};

export default function BasicTestScreen({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const progress = (currentIndex / BASIC_QUESTIONS.length) * 100;
  const question = BASIC_QUESTIONS[currentIndex];

  const animateTransition = (callback) => {
    Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 0, duration: 150, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: 1, duration: 250, useNativeDriver: true }),
    ]).start();
    setTimeout(callback, 150);
  };

  const handleSelect = (option) => {
    setSelectedOption(option.id);
    const newAnswers = { ...answers, [question.id]: option.category };
    setTimeout(() => {
      if (currentIndex < BASIC_QUESTIONS.length - 1) {
        animateTransition(() => { setAnswers(newAnswers); setCurrentIndex(currentIndex + 1); setSelectedOption(null); });
      } else {
        const counts = { V: 0, A: 0, R: 0, K: 0 };
        Object.values(newAnswers).forEach(cat => counts[cat]++);
        navigation.replace('BasicResult', { counts, total: BASIC_QUESTIONS.length });
      }
    }, 400);
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      animateTransition(() => { setCurrentIndex(currentIndex - 1); setSelectedOption(null); });
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient colors={[Colors.bg.primary, Colors.bg.secondary]} style={StyleSheet.absoluteFillObject} />

      <View style={styles.topBar}>
        <TouchableOpacity onPress={handleBack} style={styles.backBtn}>
          <Text style={styles.backBtnText}>{T.basicTest.back}</Text>
        </TouchableOpacity>
        <Text style={styles.questionCounter}>{currentIndex + 1} / {BASIC_QUESTIONS.length}</Text>
        <View style={{ width: 60 }} />
      </View>

      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]}>
          <LinearGradient colors={['#7C3AED', '#3B82F6']} style={StyleSheet.absoluteFillObject} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <View style={[styles.catBadge, { backgroundColor: CATEGORY_COLORS.V + '20' }]}>
            <Text style={styles.catBadgeText}>{T.basicTest.catBadge}</Text>
          </View>

          <View style={styles.questionCard}>
            <LinearGradient colors={['rgba(124,58,237,0.12)', 'rgba(59,130,246,0.06)']} style={styles.questionCardGradient}>
              <Text style={styles.questionNum}>{T.basicTest.questionLabel(currentIndex + 1)}</Text>
              <Text style={styles.questionText}>{question.text}</Text>
            </LinearGradient>
          </View>

          <Text style={styles.chooseText}>{T.basicTest.chooseText}</Text>
          {question.options.map((option) => {
            const isSelected = selectedOption === option.id;
            const color = CATEGORY_COLORS[option.category];
            return (
              <TouchableOpacity key={option.id} onPress={() => handleSelect(option)}
                style={[styles.optionBtn, isSelected && { borderColor: color, backgroundColor: color + '15' }]}
                activeOpacity={0.8}
              >
                <View style={[styles.optionLetter, { backgroundColor: isSelected ? color : 'transparent', borderColor: color + '60' }]}>
                  <Text style={[styles.optionLetterText, { color: isSelected ? '#fff' : color }]}>{option.id.toUpperCase()}</Text>
                </View>
                <Text style={[styles.optionText, isSelected && { color: Colors.text.primary }]}>{option.text}</Text>
                {isSelected && <Text style={styles.checkmark}>✓</Text>}
              </TouchableOpacity>
            );
          })}

          <Text style={styles.progressText}>{T.basicTest.remaining(BASIC_QUESTIONS.length - currentIndex - 1)}</Text>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bg.primary },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 50, paddingBottom: 12 },
  backBtn: { width: 60 },
  backBtnText: { color: Colors.text.accent, fontSize: 16 },
  questionCounter: { fontSize: 14, fontWeight: '700', color: Colors.text.secondary },
  progressContainer: { height: 4, backgroundColor: Colors.bg.card, marginHorizontal: 20, borderRadius: 2, marginBottom: 20, overflow: 'hidden' },
  progressBar: { height: '100%', borderRadius: 2, overflow: 'hidden' },
  content: { paddingHorizontal: 20, paddingBottom: 40 },
  catBadge: { alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 5, borderRadius: 20, marginBottom: 14 },
  catBadgeText: { fontSize: 12, color: Colors.text.accent, fontWeight: '600' },
  questionCard: { borderRadius: 16, overflow: 'hidden', marginBottom: 20, borderWidth: 1, borderColor: 'rgba(124,58,237,0.2)' },
  questionCardGradient: { padding: 20 },
  questionNum: { fontSize: 12, color: Colors.text.muted, fontWeight: '600', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 },
  questionText: { fontSize: 18, fontWeight: '700', color: Colors.text.primary, lineHeight: 26 },
  chooseText: { fontSize: 13, color: Colors.text.muted, marginBottom: 12 },
  optionBtn: { flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: Colors.bg.card, borderWidth: 1.5, borderColor: Colors.bg.glassBorder, borderRadius: 14, padding: 14, marginBottom: 10 },
  optionLetter: { width: 34, height: 34, borderRadius: 10, borderWidth: 1.5, justifyContent: 'center', alignItems: 'center', flexShrink: 0 },
  optionLetterText: { fontWeight: '800', fontSize: 15 },
  optionText: { flex: 1, fontSize: 14, color: Colors.text.secondary, lineHeight: 20 },
  checkmark: { fontSize: 18, color: Colors.success },
  progressText: { textAlign: 'center', fontSize: 12, color: Colors.text.muted, marginTop: 16 },
});
