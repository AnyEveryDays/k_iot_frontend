import ToggleSection from '@/components/ToggleSection'
import React from 'react'
import A_CSS from './A_CSS'
import B_Module from './B_Module'

function index() {
  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        === 리액트 전역 상태 관리 ===
      </h1>

      <ToggleSection title="1. 일반 CSS">
        <A_CSS />
      </ToggleSection>
      <ToggleSection title="2. 모듈 CSS">
        <B_Module />
      </ToggleSection>
    </div>
  )
}

export default index