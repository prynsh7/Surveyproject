

import Select from 'react-select'


const Select_D = ({ options, placeholder, setSelected }) => {

    const handleChange = (selectedOptions) => {
        setSelected(selectedOptions.value);
    }

    return (
        <div className='my-2 w-100'>
            <Select
                options={options}
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )
}

export default Select_D
