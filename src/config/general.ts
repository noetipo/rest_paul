import { MESSAGES } from './messages';

/**
 * Config tamaño de los modals de devextreme.
 */
export const dxSizeModal = {
  small: {
    width: 350,
    height: 250,
  },
  medium: {
    width: 800,
    height: 500,
  },
  large: {
    width: 1000,
    height: 1000,
  },
};

/**
 * Config del los mensajes, icons etc de los formuarios.
 */
export const abForms = {
  btnSave: {
    label: MESSAGES.forms.btnSave,
    icon: 'fa fa-save', /** FontAewsome */
    class: 'btn-primary', /** primary, secondary, ligth (bootstrap) */
  },
  btnCancel: {
    label: MESSAGES.forms.btnCancel,
    icon: 'fa fa-ban', /** FontAewsome */
    class: 'btn-secondary', /** primary, secondary, ligth (bootstrap) */
  },
  btnRetrive: {
    label: MESSAGES.forms.btnRetrive,
    icon: 'fas fa-eraser', /** FontAewsome */
    class: 'btn-primary', /** primary, secondary, ligth (bootstrap) */
  },
  btnNew: {
    label: MESSAGES.forms.btnNew,
    icon: 'fa fa-plus-circle', /** FontAewsome */
    class: 'btn-primary', /** primary, secondary, ligth (bootstrap) */
  },
  btnEdit: {
    label: MESSAGES.forms.btnEdit,
    icon: 'fa fa-edit', /** FontAewsome */
    // class: 'btn-warning', /** primary, secondary, ligth (bootstrap) */
    class: 'btn-secondary', /** primary, secondary, ligth (bootstrap) */
  },
  btnViewDetail: {
    label: MESSAGES.forms.btnViewDetail,
    icon: 'fa fa-eye', /** FontAewsome */
    class: 'btn-success', /** primary, secondary, ligth (bootstrap) */
  },
  btnDelete: {
    label: MESSAGES.forms.btnDelete,
    icon: 'fa fa-trash-o', /** FontAewsome */
    class: 'btn-danger', /** primary, secondary, ligth (bootstrap) */
  },
  btnActived: {
    label: MESSAGES.forms.btnActived,
    icon: 'fa fa-thumbs-up', /** FontAewsome */
    class: 'btn-light', /** primary, secondary, ligth (bootstrap) */
  },
  btnDeactived: {
    label: MESSAGES.forms.btnDeactived,
    icon: 'fa fa-thumbs-down', /** FontAewsome */
    class: 'btn-light', /** primary, secondary, ligth (bootstrap) */
  },
  btnClose: {
    label: MESSAGES.forms.btnClose,
    icon: 'fa fa-lock', /** FontAewsome */
    class: 'btn-danger', /** primary, secondary, ligth (bootstrap) */
  },
  btnOpen: {
    label: MESSAGES.forms.btnOpen,
    icon: 'fa fa-unlock', /** FontAewsome */
    class: 'btn-success', /** primary, secondary, ligth (bootstrap) */
  },
  btnConfirm: {
    label: MESSAGES.forms.btnConfirm,
    icon: 'fa fa-check-square',
    class: 'btn-primary',
  },
};

