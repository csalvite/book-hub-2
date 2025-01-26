import React, { useEffect } from 'react';
import { BusinessFormData, IdName } from '../../../../../types/business';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { getServices } from '../../../../../api/business';

interface ServicesInfoProps {
  formData: BusinessFormData;
  updateFormData: (data: Partial<BusinessFormData>) => void;
}

const ServicesInfo: React.FC<ServicesInfoProps> = ({
  formData,
  updateFormData,
}) => {
  const [options, setOptions] = React.useState<readonly IdName[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const addService = () => {
    updateFormData({
      services: [
        ...formData.services,
        { id: null, name: '', price: 0, duration: 30, description: '' },
      ],
    });
  };

  const removeService = (index: number) => {
    const newServices = formData.services.filter((_, i) => i !== index);
    updateFormData({ services: newServices });
  };

  const updateService = (
    index: number,
    field: string,
    value: string | number | null
  ) => {
    const newServices = formData.services.map((service, i) => {
      if (i === index) {
        return { ...service, [field]: value };
      }
      return service;
    });
    updateFormData({ services: newServices });
  };

  const fetchServices = async () => {
    setLoading(true);
    try {
      const response = await getServices(formData.businessInfo.type);
      console.log(response);
      setOptions(response);
    } catch (error) {
      setError(true);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='space-y-6'>
      <h2 className='text-2xl font-bold'>Services</h2>

      <div className='space-y-4'>
        {formData.services.map((service, index) => {
          return (
            <div key={index} className='p-4 border rounded-lg space-y-4'>
              <div className='flex justify-between items-start'>
                <div className='flex-1 space-y-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>
                      Service Name
                    </label>
                    <Autocomplete
                      className='mt-4 w-full'
                      isOptionEqualToValue={(option, value) =>
                        option.name === value.name
                      }
                      getOptionLabel={(option) => option.name}
                      options={options}
                      loading={loading}
                      onChange={(
                        _event: React.SyntheticEvent<Element, Event>,
                        value: { id: number; name: string } | null
                      ) => {
                        if (value) {
                          updateService(index, 'id', value.id);
                          updateService(index, 'name', value.name);
                        }
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label='Find your business type'
                          slotProps={{
                            input: {
                              ...params.InputProps,
                              endAdornment: (
                                <React.Fragment>
                                  {loading ? (
                                    <CircularProgress
                                      color='inherit'
                                      size={20}
                                    />
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

                  <div className='grid grid-cols-2 gap-4'>
                    <div>
                      <label className='block text-sm font-medium text-gray-700'>
                        Price ($)
                      </label>
                      <input
                        type='number'
                        value={service.price}
                        onChange={(e) =>
                          updateService(
                            index,
                            'price',
                            parseFloat(e.target.value)
                          )
                        }
                        min='0'
                        step='0.01'
                        className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500'
                      />
                    </div>

                    <div>
                      <label className='block text-sm font-medium text-gray-700'>
                        Duration (min)
                      </label>
                      <input
                        type='number'
                        value={service.duration}
                        onChange={(e) =>
                          updateService(
                            index,
                            'duration',
                            parseInt(e.target.value)
                          )
                        }
                        min='0'
                        step='15'
                        className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500'
                      />
                    </div>
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700'>
                      Description
                    </label>
                    <textarea
                      rows={4}
                      style={{ resize: 'vertical' }}
                      value={service.description ?? ''}
                      onChange={(e) =>
                        updateService(index, 'description', e.target.value)
                      }
                      className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500'
                    ></textarea>
                  </div>
                </div>

                <button
                  onClick={() => removeService(index)}
                  className='ml-4 p-2 text-red-600 hover:text-red-800'
                >
                  <i className='fa-solid fa-trash-can'></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <button
        type='button'
        onClick={addService}
        className='flex items-center justify-center w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:text-gray-800'
      >
        <i className='fa-solid fa-plus mr-2'></i>
        Add Service
      </button>
    </div>
  );
};

export default ServicesInfo;
