export function Input({ placeholder, value, onChange }) {
  return (
    <div>
      <Input
        type="text"
        className="form-control"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
