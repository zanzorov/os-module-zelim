import os from "os";
export function welc() {
  const result = os.type();
  return `Привет, юзер. Вижу ты зашел с ${result}`;
}
console.log(welc());
