// src/screens/PremiumTestScreen.js
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../theme/colors';
import { PREMIUM_QUESTIONS, SCALE_OPTIONS, PREMIUM_INTELLIGENCES } from '../data/premiumTest';

const MAX_SCORE_PER_INTEL = 25; // 5 questions × max 5 points

const SCALE_COLORS = ['#EF4444', '#F97316', '#F59E0B', '#84CC16', '#10B981'];

export default function PremiumTestScreen({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedValue, setSelectedValue] = useState(null);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const progress = (currentIndex / PREMIUM_QUESTIONS.length) * 100;
  const question = PREMIUM_QUESTIONS[currentIndex];
  const intelInfo = PREMIUM_INTELLIGENCES[question.category];
  const intelColor = intelInfo?.color || Colors.text.accent;

  const animateTransition = (callback) => {
    Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 0, duration: 150, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: 1, duration: 250, useNativeDriver: true }),
    ]).start();
    setTimeout(callback, 150);
  };

  const handleSelect = (scaleOption) => {
    setSelectedValue(scaleOption.value);
    const newAnswers = {
      ...answers,
      [question.id]: { value: scaleOption.value, category: question.category },
    };

    setTimeout(() => {
      if (currentIndex < PREMIUM_QUESTIONS.length - 1) {
        animateTransition(() => {
          setAnswers(newAnswers);
          setCurrentIndex(currentIndex + 1);
          setSelectedValue(null);
        });
      } else {
        const scores = { LG: 0, LM: 0, ES: 0, MI: 0, KC: 0, IN: 0, IE: 0, NT: 0 };
        Object.values(newAnswers).forEach(({ value, category }) => {
          scores[category] += value;
        });
        navigation.replace('PremiumResult', { scores });
      }
    }, 400);
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      const prevQuestion = PREMIUM_QUESTIONS[currentIndex - 1];
      const prevAnswer = answers[prevQuestion.id];
      animateTransition(() => {
        setCurrentIndex(currentIndex - 1);
        setSelectedValue(prevAnswer ? prevAnswer.value : null);
      });
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
          <Text style={styles.backBtnText}>‹ Atrás</Text>
        </TouchableOpacity>
        <Text style={styles.questionCounter}>{currentIndex + 1} / {PREMIUM_QUESTIONS.length}</Text>
        <View style={{ width: 60 }} />
      </View>

      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]}>
          <LinearGradient
            colors={['#F59E0B', '#EF4444']}
            style={StyleSheet.absoluteFillObject}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <View style={[styles.catBadge, { backgroundColor: intelColor + '20' }]}>
            <Text style={[styles.catBadgeText, { color: intelColor }]}>
              {intelInfo?.emoji} {intelInfo?.label}
            </Text>
          </View>

          <View style={[styles.questionCard, { borderColor: intelColor + '30' }]}>
            <LinearGradient
              colors={[intelColor + '18', intelColor + '06']}
              style={styles.questionCardGradient}
            >
              <Text style={styles.questionNum}>Pregunta {currentIndex + 1}</Text>
              <Text style={styles.questionText}>{question.text}</Text>
            </LinearGradient>
          </View>

          <Text style={styles.scaleLabel}>¿Qué tan de acuerdo estás?</Text>

          <View style={styles.scaleRow}>
            {SCALE_OPTIONS.map((option) => {
              const isSelected = selectedValue === option.value;
              const scaleColor = SCALE_COLORS[option.value - 1];
              return (
                <TouchableOpacity
                  key={option.id}
                  onPress={() => handleSelect(option)}
                  style={[
                    styles.scaleBtn,
                    isSelected && { backgroundColor: scaleColor, borderColor: scaleColor },
                  ]}
                  activeOpacity={0.7}
                >
                  <Text style={[styles.scaleBtnNum, isSelected && styles.scaleBtnNumSelected]}>
                    {option.short}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <View style={styles.scaleLegend}>
            <Text style={styles.scaleLegendText}>Muy en{'\n'}desacuerdo</Text>
            <Text style={[styles.scaleLegendText, { textAlign: 'right' }]}>Muy de{'\n'}acuerdo</Text>
          </View>

          <Text style={styles.progressText}>
            {PREMIUM_QUESTIONS.length - currentIndex - 1} preguntas restantes
          </Text>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bg.primary },
  topBar: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 20, paddingTop: 50, paddingBottom: 12,
  },
  backBtn: { width: 60 },
  backBtnText: { color: Colors.text.accent, fontSize: 16 },
  questionCounter: { fontSize: 14, fontWeight: '700', color: Colors.text.secondary },
  progressContainer: {
    height: 4, backgroundColor: Colors.bg.card, marginHorizontal: 20,
    borderRadius: 2, marginBottom: 20, overflow: 'hidden',
  },
  progressBar: { height: '100%', borderRadius: 2, overflow: 'hidden' },
  content: { paddingHorizontal: 20, paddingBottom: 40 },
  catBadge: { alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 5, borderRadius: 20, marginBottom: 14 },
  catBadgeText: { fontSize: 12, fontWeight: '700' },
  questionCard: { borderRadius: 16, overflow: 'hidden', marginBottom: 24, borderWidth: 1 },
  questionCardGradient: { padding: 20 },
  questionNum: {
    fontSize: 12, color: Colors.text.muted, fontWeight: '600',
    marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1,
  },
  questionText: { fontSize: 18, fontWeight: '700', color: Colors.text.primary, lineHeight: 26 },
  scaleLabel: { fontSize: 13, color: Colors.text.muted, marginBottom: 16, textAlign: 'center' },
  scaleRow: { flexDirection: 'row', justifyContent: 'space-between', gap: 8, marginBottom: 10 },
  scaleBtn: {
    flex: 1, aspectRatio: 1, borderRadius: 12, borderWidth: 1.5,
    borderColor: Colors.bg.glassBorder, backgroundColor: Colors.bg.card,
    justifyContent: 'center', alignItems: 'center',
  },
  scaleBtnNum: { fontSize: 18, fontWeight: '800', color: Colors.text.secondary },
  scaleBtnNumSelected: { color: '#fff' },
  scaleLegend: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  scaleLegendText: { fontSize: 10, color: Colors.text.muted, lineHeight: 14 },
  progressText: { textAlign: 'center', fontSize: 12, color: Colors.text.muted, marginTop: 8 },
});
