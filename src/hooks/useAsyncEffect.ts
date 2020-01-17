import { useEffect } from 'react'

export function useAsyncEffect(
  effect: () => Promise<any>,
  deps: readonly any[] = []
): void {
  useEffect(() => {
    effect().catch(e => console.warn('useAsyncEffect error', e))
  }, [deps, effect])
}
