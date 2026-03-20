import type { CSSProperties } from 'react';
import { useMemo } from 'react';
import type { Padding } from '../types';
import { getSpacingInPx } from './spacing';

export const usePaddingProps = (padding?: Padding): CSSProperties =>
  useMemo(() => {
    if (!padding) {
      return {};
    }

    if (Array.isArray(padding)) {
      if (padding.length === 2) {
        return {
          paddingTop: getSpacingInPx(padding[0]),
          paddingRight: getSpacingInPx(padding[1]),
          paddingBottom: getSpacingInPx(padding[0]),
          paddingLeft: getSpacingInPx(padding[1]),
        };
      }

      return {
        paddingTop: getSpacingInPx(padding[0]),
        paddingRight: getSpacingInPx(padding[1]),
        paddingBottom: getSpacingInPx(padding[2]),
        paddingLeft: getSpacingInPx(padding[3]),
      };
    }

    return {
      padding: getSpacingInPx(padding),
    };
  }, [padding]);
