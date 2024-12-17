exort function Checkbox ({checked, onChange, label}) {
    return <div>
        <input type="checkbox"
               className ="form-check-input"
               checked={checked}
               onChance{(e) => onChange(e.target.checked)}
    />
    <label> className="form-check-label">{label}</label>
</div>

}