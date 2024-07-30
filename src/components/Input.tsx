type InputProps = {
  label?: string;
  name: string;
  type: string;
  [key: string]: unknown; 
}

export default function Input({label, name, type, ...props}:InputProps) {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input 
        id={name}
        name={name}
        type={type}
        {...props}
      />
    </div>
  )
}
