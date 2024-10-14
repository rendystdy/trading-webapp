import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import { useLocation } from 'react-router-dom';
import React, {useEffect} from 'react'
import { animateScroll as scroll} from 'react-scroll';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useScrollToTop = () => {
  let location = useLocation();
  useEffect(() => {
    scrollToTop();
  }, [location])
  
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
}
