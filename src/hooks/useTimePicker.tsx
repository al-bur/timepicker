import { useState } from "react";
import { HMWithPeriod } from "../types/time";

// NOTE: 추후, 시간 변경 단위를 조절할 수 있도록 추가 가능
const CHANGING_MINUTE_UNIT = 5;

export default function useTimePicker() {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [HM, setHM] = useState({ hour: 0, minute: 0 });
  const degrees = ((HM.hour * 60 + HM.minute) / 1440) * 360;
  const HMWithPeriod: HMWithPeriod = {
    ...HM,
    period: HM.hour >= 12 ? "PM" : "AM",
  };

  const changeHour = (changingHour: number) => {
    setHM((prev) => {
      const hour = (prev.hour + changingHour + 24) % 24;

      return { ...prev, hour };
    });
  };

  const changeMinute = (changingMinute: number) => {
    setHM((prev) => {
      const newMinute = prev.minute + changingMinute;
      const shouldChangeHour = newMinute >= 60 || newMinute < 0;
      const minute = (newMinute + 60) % 60;
      const hour = shouldChangeHour
        ? (prev.hour + (newMinute >= 60 ? 1 : -1) + 24) % 24
        : prev.hour;

      return { hour, minute };
    });
  };

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

  const handleSetCalculatedHM = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown) return;

    setHM(getHMbyCalculatingDegrees(e));
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setHM(getHMbyCalculatingDegrees(e));
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  return {
    HM,
    HMWithPeriod,
    degrees,
    handleIncreaseHour: () => changeHour(1),
    handleDecreaseHour: () => changeHour(-1),
    handleIncreaseMinute: () => changeMinute(CHANGING_MINUTE_UNIT),
    handleDecreaseMinute: () => changeMinute(-CHANGING_MINUTE_UNIT),
    handleSetCalculatedHM,
    handleMouseDown,
    handleMouseUp,
  };
}
