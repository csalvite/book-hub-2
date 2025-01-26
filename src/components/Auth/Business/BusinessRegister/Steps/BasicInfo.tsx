import React from 'react';
import { BusinessFormData, IdName } from '../../../../../types/business';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { getBusinessTypes } from '../../../../../api/business';
import { debounce } from '../../../../../utils/debounce';

interface BasicInfoProps {
  formData: BusinessFormData;
  updateFormData: (data: Partial<BusinessFormData>) => void;
}

const BasicInfo: React.FC<BasicInfoProps> = ({ formData, updateFormData }) => {
  const [options, setOptions] = React.useState<readonly IdName[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const fetchBusinessType = async (value: string) => {
    setLoading(true);
    try {
      const response = await getBusinessTypes(value);
      console.log(response);
      setOptions(response);
    } catch (error) {
      setError(true);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchBusinessType = debounce((value: string) => {
    if (value.length > 3) {
      fetchBusinessType(value);
    }
  }, 500);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    updateFormData({
      businessInfo: {
        ...formData.businessInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div className='space-y-6'>
      <h2 className='text-2xl font-bold'>Basic Information</h2>

      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Business Name
        </label>
        <input
          type='text'
          name='name'
          value={formData.businessInfo.name}
          onChange={handleChange}
          className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500'
        />
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Business Type
        </label>
        <Autocomplete
          className='mt-4 w-full'
          isOptionEqualToValue={(option, value) => option.name === value.name}
          getOptionLabel={(option) => option.name}
          options={options}
          loading={loading}
          onChange={(
            _event: React.SyntheticEvent<Element, Event>,
            value: { id: number; name: string } | null
          ) => {
            if (value) {
              updateFormData({
                businessInfo: {
                  ...formData.businessInfo,
                  type: value.id, // Puedes ajustar el mapeo aquí si es necesario
                },
              });
            }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label='Find your business type'
              onChange={(
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
                >
              ) => handleSearchBusinessType(e.target.value)}
              slotProps={{
                input: {
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {loading ? (
                        <CircularProgress color='inherit' size={20} />
                      ) : null}
                      {error ? <p>An Error has occurred</p> : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                },
              }}
            />
          )}
        />
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Description
        </label>
        <textarea
          name='description'
          value={formData.businessInfo.description}
          onChange={handleChange}
          rows={4}
          className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500'
        />
      </div>
    </div>
  );
};

export default BasicInfo;
