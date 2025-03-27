import { useCallback } from "react";
import { customSwallAlert } from "./../utils";
import { SwallTypes } from "./../@types";

interface PropsConfig {
  title?: string;
  text?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  showCancelButton?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
}

interface PropsSwall {
  /**
   * Exibe um alerta de informação.
   * @returns {void}
   */
  showInfo: (config?: PropsConfig) => void;

  /**
   * Exibe um alerta de erro.
   * @returns {void}
   */
  showError: (config?: PropsConfig) => void;

  /**
   * Exibe um alerta de sucesso.
   * @returns {void}
   */
  showSuccess: (config?: PropsConfig) => void;

  /**
   * Exibe um alerta de aviso.
   * @returns {void}
   */
  showWarning: (config?: PropsConfig) => void;

  /**
   * Exibe um alerta de pergunta.
   * @returns {void}
   */
  showQuestion: (config?: PropsConfig) => void;
}

/**
 * Hook para exibir alertas predefinidos com SweetAlert2.
 * Utiliza a função `customSwallAlert` para exibir alertas dos tipos: 'info', 'error', 'success', 'warning' e 'question'.
 *
 * Recebe de parametros dentro de config:
 * @param {string} [config.title] - O título do alerta.
 * @param {string} [config.text] - O texto do alerta.
 * @param {string} [config.confirmButtonText] - Texto do botão de confirmação.
 * @param {string} [config.cancelButtonText] - Texto do botão de cancelamento.
 * @param {boolean} [config.showCancelButton] - Se o botão de cancelamento será exibido.
 * @param {Function} [config.onConfirm] - Função chamada ao confirmar.
 * @param {Function} [config.onCancel] - Função chamada ao cancelar.
 *
 * @returns {{
 *   showInfo: (config?: PropsConfig) => void;
 *   showError: (config?: PropsConfig) => void;
 *   showSuccess: (config?: PropsConfig) => void;
 *   showWarning: (config?: PropsConfig) => void;
 *   showQuestion: (config?: PropsConfig) => void;
 * }}
 *
 * @example
 * const { showInfo, showError, showSuccess } = useSwall();
 * showInfo({ title: 'Informação', text: 'Este é um alerta informativo' });
 * showError({ title: 'Erro', text: 'Algo deu errado' });
 * showSuccess({ title: 'Sucesso', text: 'Ação concluída com sucesso' });
 */
export function useSwall(): PropsSwall {
  const showAlert = useCallback((type: SwallTypes, config?: PropsConfig) => {
    customSwallAlert({
      title: config?.title ?? type.charAt(0).toUpperCase() + type.slice(1),
      text: config?.text ?? "",
      confirmButtonText: config?.confirmButtonText ?? "OK",
      cancelButtonText: config?.cancelButtonText ?? "Cancel",
      showCancelButton: config?.showCancelButton ?? false,
      icon: type,
      onConfirm: config?.onConfirm,
      onCancel: config?.onCancel,
    });
  }, []);

  return {
    showInfo: (config?: PropsConfig): void =>
      showAlert(SwallTypes.INFO, config),
    showError: (config?: PropsConfig): void =>
      showAlert(SwallTypes.ERROR, config),
    showSuccess: (config?: PropsConfig): void =>
      showAlert(SwallTypes.SUCCESS, config),
    showWarning: (config?: PropsConfig): void =>
      showAlert(SwallTypes.WARNING, config),
    showQuestion: (config?: PropsConfig): void =>
      showAlert(SwallTypes.QUESTION, config),
  };
}
