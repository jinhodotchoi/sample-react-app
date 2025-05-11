/**
 * 함수를 실행하고 그 결과값을 반환하는 유틸리티 함수입니다.
 *
 * @param fn - 실행할 함수
 * @typeParam T - 함수의 반환 타입
 * @returns 함수 실행 결과값
 *
 * @example
 * ```ts
 * const result = value(() => "Hello");
 * console.log(result); // "Hello"
 * ```
 */
export function value<T>(fn: () => T) {
  return fn();
}
