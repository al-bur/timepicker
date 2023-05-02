# TimePicker

빅픽처인터랙티브 과제로 시간 선택 컴포넌트를 만들어보았습니다.

[과제 질문은 밑에 있습니다](https://github.com/al-bur/clock/edit/main/README.md#%EA%B3%BC%EC%A0%9C-%EC%A7%88%EB%AC%B8)
<br>
[데모 사이트에서 확인해보세요!](https://timepicker.netlify.app/)

## 실행 방법


1. git clone

```bash
git clone https://github.com/al-bur/clock.git
```

2. 폴더 이동

```bash
cd clock
```

3. 설치

```bash
npm i
```

4. 실행
```bash
npm run dev
```

*각종 테스트 실행 명령어
```bash
# 컴포넌트 ui test 실행 (jest)
npm run test:ui

# hook test 실행 (jest)
npm run test:hook

# e2e test 실행 (cypress)
# 단, 개발 서버(5147 prot)를 활성화 해놓은 상황에서만 가능합니다.
npm run test:e2e 

```

<br>

# 과제 질문

## 1.가장 고려했던 부분 - 테스트

이번 과제에서는 테스트에 대해서 가장 많이 고려했습니다. **테스트하기 좋은 컴포넌트 구조와 여러 종류의 테스트**에 대해서 가장 고민을 많이 했던 것 같이번 과습니다.

<br>

### **왜 테스트에 대해서 고민하게 되었는지?**

이는 테스트가 꽤 중요하다고 생각하기 때문입니다. 최근에는 고객들의 요구사항이 빈번하게 생겨나고 새로운 기술들도 빠르게 등장하고 있습니다. 이러한 상황에 맞춰서 개발도 빠르게 진행돼야 하는데 테스트 없이 기능들을 추가/변경/삭제하거나 새로운 기술 도입으로 마이그레이션 작업을 하려고 한다면 발 빠르게 상황에 맞춰서 나아가지 못할 가능성이 크다고 생각합니다. 비록, 테스트 코드를 추가로 작성해야 한다는 비용이 있지만, 테스트 코드를 잘 갖춰놓은 상황이라면 안정성 향상이나 각각 개발자들이 스스로 확신하고 개발을 진행하도록 도와주면서 개발 속도와 퀄리티를 모두 가지고 갈 수 있지 않나 싶습니다.

이러한 테스트의 중요성을 인지하면서 이번 과제에서 테스트에 대해서 몰입을 해보고 싶었습니다.

<br>

### **역할을 잘 분리하여 컴포넌트를 만드는 것이 테스트하기 좋은 구조를 만드는 첫걸음**

너무 길게 글을 작성할 수 없을 것 같아 바로 결론으로 들어가려고 합니다.

여러 리소스들을 보면서 스스로 테스트하기 좋은 구조에 대한 기준을 정해보았는데 그것은 바로 **역할을 잘 분리하는 것**입니다. 예를 들자면 비즈니스 로직과 UI의 역할을 가진 컴포넌트를 완전하게 역할에 맞게 분리해서 컴포넌트를 만든다면, 이후 테스트 코드를 훨씬 편하게 작성할 수 있습니다.

실제로, 이번에 과제를 하면서 모든 비즈니스 로직을 hook으로 분리해 놓은 컴포넌트와 props로 필요한 정보들을 받아서 렌더링만 해주는 역할을 하는 컴포넌트들을 분리해서 만들어봤었는데, 이전에 테스트 코드를 작성했을 때보다 훨씬 쉽게 hook과 UI에 대한 테스트 코드들을 작성할 수 있었습니다.

<br>

### **각각의 테스트의 역할에 맞게 테스트 코드를 작성해 보자**

추가로, 이번에 다양한 종류의 테스트 코드를 작성해 보는 것을 시도해 보았습니다. hook, UI, e2e 테스트들을 작성했는데, 최대한 서로의 역할을 가져가면서 중복되지 않도록 테스트 코드를 작성하려고 노력했습니다.

hook 테스트는 비즈니스 로직을 테스트하는 용도, UI는 이벤트가 잘 호출이 되는 지와 내용이 잘 렌더링 되는 지를 테스트하는 용도 그리고 e2e는 사용자 시나리오를 잘 보여주고 테스트하는 용도로 작성해 보았습니다.


<br>

## 2. 가장 어려웠던 부분 - 시계 이미지의 특정 포인트를 클릭했을 때, 그 포인트에 맞춰 시계침을 움직이는 것
시계침을 렌더링하는 방식을 transform을 활용해서 각도(degree)를 변화시키는 방식을 사용하고 있었기 때문에 시계 이미지의 한 부분을 클릭했을 때도 똑같이 특정 각도를 추출하여야 했습니다.

이 각도를 추출하기 위해 많은 시간을 고민했던 것 같습니다. 밥을 먹을 때, 씻을 때, 산책할 때, 여러 상황에서 오랫동안 고민을 하다가 문득 이미지에서 마우스 클릭했을 때 발생한 이벤트 객체에 있는 프로퍼티들을 활용해서 각도를 구할 수 있지 않을까? 생각이 들어서 이와 관련해서 조사를 해보았습니다.

찾아보니, 시계의 가운뎃점의 위치와 클릭했을 때의 포인트 위치를 비교해서 Math 함수를 이용하면 최종적으로 각도를 구할 수 있다는 것을 알게 되었습니다.

최종적으로는 아래와 같이 마우스의 위치를 바탕으로 구한 각도를 바탕으로 hour와 minute를 반환하는 함수를 만들었습니다.

```Typescript
// NOTE: 시계내 클릭한 위치를 기반으로 중앙점으로부터의 각도를 구하고 이를 바탕으로 시간(hour, minute)을 구하는 함수
// 수학적 식이 포함되서 주석으로 설명을 적었습니다!
const getHMbyCalculatingDegrees = (e: React.MouseEvent<HTMLDivElement>) => {
  const targetRect = e.currentTarget.getBoundingClientRect();
  // 클릭한 요소의 중심 X, Y 좌표를 계산합니다.
  const centerX = targetRect.left + targetRect.width / 2;
  const centerY = targetRect.top + targetRect.height / 2;

  // atan2 메서드를 활용해 라디안을 계산합니다
  const radians = Math.atan2(e.clientY - centerY, e.clientX - centerX); // 마우스 좌표와 요소 중심 좌표의 차이를 이용해 각도를 라디안으로 계산합니다.

  // 라디안 값을 각도로 변환하고, 0~360도를 맞춰주기 위해 추가적으로 degree를 더해줍니다.
  const degrees = ((radians * 180) / Math.PI + 360 + 90) % 360;

  // 전체 각도를 이용해 시간(hour, minute)을 계산합니다.
  const hour = Math.floor((degrees / 360) * 24);
  const minute = Math.floor(((degrees % 15) / 15) * 60);

  // minute 변동 단위에 맞춰서 시계 침을 움직일 수 있도록 하기 위해 해당 unit을 기반으로 반올림 해줍니다.
  const roundedMinuteByChangingUnit =
    Math.round(minute / CHANGING_MINUTE_UNIT) * CHANGING_MINUTE_UNIT;

  return roundedMinuteByChangingUnit === 60
    ? { hour: (hour + 1) % 24, minute: 0 }
    : { hour, minute: roundedMinuteByChangingUnit };
};
```
