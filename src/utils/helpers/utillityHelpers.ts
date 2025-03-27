import { SwallTypes } from './../../@types';
import Swal from 'sweetalert2';

/**
 * Exibe um alerta personalizado utilizando a biblioteca SweetAlert2.
 *
 * @param {Object} params - Parâmetros de configuração do alerta.
 * @param {string} [params.title='Default Title'] - O título do alerta.
 * @param {string} [params.text='Default Text'] - O texto do alerta.
 * @param {'success' | 'error' | 'warning' | 'info' | 'question'} [params.icon='info'] - O ícone a ser exibido no alerta.
 * @param {string} [params.confirmButtonText='OK'] - Texto do botão de confirmação.
 * @param {string} [params.cancelButtonText='Cancel'] - Texto do botão de cancelamento.
 * @param {boolean} [params.showCancelButton=false] - Se o botão de cancelamento será exibido.
 * @param {string} [params.confirmButtonColor='#3085d6'] - Cor do botão de confirmação.
 * @param {string} [params.cancelButtonColor='#d33'] - Cor do botão de cancelamento.
 * @param {number} [params.timer=0] - Tempo em milissegundos para o alerta ser fechado automaticamente (0 para sem limite).
 * @param {boolean} [params.showCloseButton=false] - Se o botão de fechamento será exibido no canto superior direito.
 * @param {'top' | 'top-start' | 'top-end' | 'center' | 'center-start' | 'center-end' | 'bottom' | 'bottom-start' | 'bottom-end'} [params.position='center'] - A posição do alerta na tela.
 * @param {string} [params.background='#fff'] - Cor de fundo do alerta.
 * @param {string} [params.footer=''] - Texto a ser exibido no rodapé do alerta.
 * @param {object} [params.customClass={}] - Classes CSS personalizadas para o alerta.
 * @param {Function} [params.onConfirm] - Função a ser executada quando o botão de confirmação for clicado.
 * @param {Function} [params.onCancel] - Função a ser executada quando o botão de cancelamento for clicado.
 */
export function customSwallAlert({
  title = 'Default Title',
  text = 'Default Text',
  icon = SwallTypes.INFO,
  confirmButtonText = 'OK',
  cancelButtonText = 'Cancel',
  showCancelButton = false,
  confirmButtonColor = '#3085d6',
  cancelButtonColor = '#d33',
  timer = 0, 
  showCloseButton = false,
  position = 'center',
  background = '#fff',
  footer = '',
  customClass = {},
  onConfirm = () => {},  
  onCancel = () => {}   
}: {
  title?: string;
  text?: string;
  icon?: SwallTypes;
  confirmButtonText?: string;
  cancelButtonText?: string;
  showCancelButton?: boolean;
  confirmButtonColor?: string;
  cancelButtonColor?: string;
  timer?: number;
  showCloseButton?: boolean;
  position?: 'top' | 'top-start' | 'top-end' | 'center' | 'center-start' | 'center-end' | 'bottom' | 'bottom-start' | 'bottom-end';
  background?: string;
  footer?: string;
  customClass?: object;
  onConfirm?: () => void;  
  onCancel?: () => void;  
}) {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
    cancelButtonText,
    showCancelButton,
    confirmButtonColor,
    cancelButtonColor,
    timer,
    showCloseButton,
    position,
    background,
    footer,
    customClass,
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm();
    }
    if (result.isDismissed) {
      onCancel();
    }
  });
}
