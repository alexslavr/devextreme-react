import dxTextArea, {
    Properties
} from "devextreme/ui/text_area";

import * as PropTypes from "prop-types";
import { Component as BaseComponent, IHtmlOptions } from "./core/component";

type ITextAreaOptions = React.PropsWithChildren<Properties & IHtmlOptions & {
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}>

class TextArea extends BaseComponent<React.PropsWithChildren<ITextAreaOptions>> {

  public get instance(): dxTextArea {
    return this._instance;
  }

  protected _WidgetClass = dxTextArea;

  protected subscribableOptions = ["value"];

  protected independentEvents = ["onChange","onContentReady","onCopy","onCut","onDisposing","onEnterKey","onFocusIn","onFocusOut","onInitialized","onInput","onKeyDown","onKeyUp","onPaste","onValueChanged"];

  protected _defaults = {
    defaultValue: "value"
  };
}
(TextArea as any).propTypes = {
  accessKey: PropTypes.string,
  activeStateEnabled: PropTypes.bool,
  autoResizeEnabled: PropTypes.bool,
  disabled: PropTypes.bool,
  elementAttr: PropTypes.object,
  focusStateEnabled: PropTypes.bool,
  height: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.number,
    PropTypes.string
  ]),
  hint: PropTypes.string,
  hoverStateEnabled: PropTypes.bool,
  isValid: PropTypes.bool,
  label: PropTypes.string,
  labelMode: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([
      "static",
      "floating",
      "hidden"])
  ]),
  maxHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  maxLength: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  minHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  name: PropTypes.string,
  onChange: PropTypes.func,
  onContentReady: PropTypes.func,
  onCopy: PropTypes.func,
  onCut: PropTypes.func,
  onDisposing: PropTypes.func,
  onEnterKey: PropTypes.func,
  onFocusIn: PropTypes.func,
  onFocusOut: PropTypes.func,
  onInitialized: PropTypes.func,
  onInput: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onOptionChanged: PropTypes.func,
  onPaste: PropTypes.func,
  onValueChanged: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  rtlEnabled: PropTypes.bool,
  spellcheck: PropTypes.bool,
  stylingMode: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([
      "outlined",
      "underlined",
      "filled"])
  ]),
  tabIndex: PropTypes.number,
  text: PropTypes.string,
  validationErrors: PropTypes.array,
  validationMessageMode: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([
      "always",
      "auto"])
  ]),
  validationMessagePosition: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([
      "bottom",
      "left",
      "right",
      "top"])
  ]),
  validationStatus: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([
      "valid",
      "invalid",
      "pending"])
  ]),
  value: PropTypes.string,
  valueChangeEvent: PropTypes.string,
  visible: PropTypes.bool,
  width: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.number,
    PropTypes.string
  ])
};
export default TextArea;
export {
  TextArea,
  ITextAreaOptions
};
import type * as TextAreaTypes from 'devextreme/ui/text_area_types';
export { TextAreaTypes };
