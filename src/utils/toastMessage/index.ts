import Toast from 'react-native-toast-message';

type ToastProps = {
  text1: string;
  text2: string;
};

export const showToast = {
  success: ({text1, text2}: ToastProps) => {
    return Toast.show({
      type: 'success',
      text1,
      text2,
      position: 'bottom',
      bottomOffset: 80,
    });
  },
  error: ({text1, text2}: ToastProps) => {
    return Toast.show({
      type: 'error',
      text1,
      text2,
      position: 'bottom',
      bottomOffset: 80,
    });
  },
  info: ({text1, text2}: ToastProps) => {
    return Toast.show({
      type: 'info',
      text1,
      text2,
      position: 'bottom',
      bottomOffset: 80,
    });
  },
};
