describe("TimePicker 컴포넌트를 활용한 시간 선택 사용자 시나리오 e2e 테스트", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5174");
  });

  it("사용자는 왼쪽에 위치한 시계를 드래그해서 시간을 조정할 수 있다", () => {
    cy.get('[data-testid="hour-text"]').should("have.text", "00");
    cy.get('[data-testid="minute-text"]').should("have.text", "00");
    cy.get('[data-testid="period-text"]').should("have.text", "AM");

    cy.get('[data-testid="clock-wrapper"]').then(($clockFace) => {
      const clockRect = $clockFace[0].getBoundingClientRect();
      const centerX = clockRect.left + clockRect.width / 2;
      const centerY = clockRect.top + clockRect.height / 2;

      cy.get('[data-testid="clock-wrapper"]').trigger(
        "mousedown",
        centerX,
        centerY,
        { force: true }
      );
      cy.get('[data-testid="clock-wrapper"]').trigger(
        "mousemove",
        centerX - 285,
        centerY,
        { force: true }
      );
      cy.get('[data-testid="clock-wrapper"]').trigger("mouseup");
    });

    cy.get('[data-testid="hour-text"]').should("have.text", "12");
    cy.get('[data-testid="minute-text"]').should("have.text", "05");
    cy.get('[data-testid="period-text"]').should("have.text", "PM");
  });

  it("사용자는 오른쪽에 위치한 타이머의 증가 감소 버튼들을 활용하여 시간을 조절할 수 있다", () => {
    cy.get('[data-testid="hour-up-arrow"]').click();
    cy.get('[data-testid="hour-text"]').should("have.text", "01");

    cy.get('[data-testid="hour-down-arrow"]').click();
    cy.get('[data-testid="hour-text"]').should("have.text", "00");

    cy.get('[data-testid="hour-down-arrow"]').click();
    cy.get('[data-testid="hour-text"]').should("have.text", "23");

    cy.get('[data-testid="minute-up-arrow"]').click();
    cy.get('[data-testid="minute-text"]').should("have.text", "05");

    cy.get('[data-testid="minute-down-arrow"]').click();
    cy.get('[data-testid="minute-text"]').should("have.text", "00");

    cy.get('[data-testid="minute-down-arrow"]').click();
    cy.get('[data-testid="minute-text"]').should("have.text", "55");
  });

  it("사용자는 오른쪽 타이머에서는 AM/PM + 12시간 형식으로 시간을 확인할 수 있다", () => {
    cy.get('[data-testid="period-text"]').should("have.text", "AM");

    Array.from({ length: 12 }).forEach(() =>
      cy.get('[data-testid="hour-up-arrow"]').click()
    );
    cy.get('[data-testid="period-text"]').should("have.text", "PM");

    Array.from({ length: 12 }).forEach(() =>
      cy.get('[data-testid="hour-up-arrow"]').click()
    );

    cy.get('[data-testid="period-text"]').should("have.text", "AM");
  });
});
