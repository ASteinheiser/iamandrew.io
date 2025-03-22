import './input.scss';

interface InputProps {
  label: string;
  type?: string;
  value: string;
  valid: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  multiline?: boolean;
  rows?: number;
}

const Input = ({ label, type, value, valid, onChange, multiline, rows }: InputProps) => {
  return (
    <div className="input-container">
      {multiline ? (
        <textarea
          id={label}
          rows={rows || 1}
          value={value}
          onChange={onChange}
          placeholder={label}
          required={true}
          className={'input-field' + (valid ? '' : ' input-field-error')}
        />
      ) : (
        <input
          id={label}
          type={type || 'text'}
          value={value}
          onChange={onChange}
          placeholder={label}
          required={true}
          className={'input-field' + (valid ? '' : ' input-field-error')}
        />
      )}

      <label className={'input-label' + (valid ? '' : ' input-label-error')}>{label}</label>
    </div>
  );
};

export default Input;
