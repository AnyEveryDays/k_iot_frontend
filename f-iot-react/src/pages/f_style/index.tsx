import ToggleSection from '@/components/ToggleSection'
import React from 'react'
import A_CSS from './A_CSS'
import B_Module from './B_Module'
import C_StyleComponents from './C_styleComponents'
import D_Emotion from './D_Emotion'
import EmotionPractice from './EmotionPractice/EmotionPractice'

function index() {
  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        === 리액트 전역 상태 관리 ===
      </h1>

      <ToggleSection title="1. Normal CSS">
        <A_CSS />
      </ToggleSection>

      <ToggleSection title="2. Module CSS">
        <B_Module />
      </ToggleSection>

      <ToggleSection title="3. Styled Components">
        <C_StyleComponents />
      </ToggleSection>

      <ToggleSection title="4. Emotion">
        <D_Emotion />
      </ToggleSection>

      <ToggleSection title="5. Emotion + 반응형">
        <EmotionPractice />
      </ToggleSection>
    </div>
  )
}

export default index