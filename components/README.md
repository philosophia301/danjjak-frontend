# Components Directory

이 디렉토리는 재사용 가능한 React 컴포넌트들을 모아두는 곳입니다.

## 디렉토리 구조

### `/ui`
- 기본적인 UI 컴포넌트들 (버튼, 입력 필드, 카드 등)
- 예: Button.tsx, Input.tsx, Card.tsx

### `/common` 
- 여러 페이지에서 공통으로 사용되는 컴포넌트들
- 예: Header.tsx, Footer.tsx, Navigation.tsx

### `/charts`
- 차트 및 데이터 시각화 컴포넌트들
- 예: BloodSugarChart.tsx, HealthChart.tsx

## 사용법

```typescript
// 컴포넌트 import 예시
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/common/Header';
import { BloodSugarChart } from '@/components/charts/BloodSugarChart';
```
