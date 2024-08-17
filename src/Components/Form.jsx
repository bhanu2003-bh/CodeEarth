// Form.jsx
import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css'; // Import CSS for styling
import axios from 'axios'
// Define the keys of the Problem object as fields
const fields = {
  number: 'Number',
  name: 'Name',
  level: 'Level',
  description: 'Description',
  example: 'Example (JSON format)',
  Constraints: 'Constraints (Comma-separated)',
  topics: 'Topics (Comma-separated)',
  code: 'Code (Optional to upload) ',
  testCases: 'Test Cases'
};

function Form() {

useEffect(()=>{
  if(localStorage.cookies!=document.cookie) navigate('/login')
})

    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    number: '',
    name: '',
    level: 'Easy', // Default value
    description: '',
    example: '',
    Constraints: '',
    topics: '',
    code: '',
    testCases: Array(5).fill().map(() => ({ input: '', output: '' })), // Initialize with 5 empty test cases
    Accepted: 0, // Default value
    Submissions: 0, // Default value
    Acceptance_Rate: 0 // Default value
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleTestCaseChange = (e, index, field) => {
    const newTestCases = formData.testCases.map((testCase, i) => 
      i === index ? { ...testCase, [field]: e.target.value } : testCase
    );
    setFormData({
      ...formData,
      testCases: newTestCases
    });
  };

  const validateForm = () => {
    const newErrors = {};
    formData.testCases.forEach((testCase, index) => {
      if (!testCase.input) newErrors[`input_${index}`] = 'Input is required';
      if (!testCase.output) newErrors[`output_${index}`] = 'Output is required';
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validateForm()) {
      // Add default values to formData if not provided
      const submittedData = {
        ...formData,
        Accepted: formData.Accepted || 0,
        Submissions: formData.Submissions || 0,
        Acceptance_Rate: formData.Acceptance_Rate || 0
      };
      let inputs  = [];
      let outputs = [];
      for(let item of submittedData.testCases){
        inputs.push(item.input);
        outputs.push(item.output);
      }
      const obj = {
        number : submittedData.number,
        name : submittedData.name,
        level : submittedData.level,
        example : submittedData.example,
        Constraints : submittedData.Constraints,
        topics : submittedData.topics,
        run_inputs : inputs,
        run_outputs : outputs,
        description : submittedData.description,
        cookie : document.cookie
      }
     
      try {
       const response = await axios.post('http://localhost:8000/problem',obj);
        console.log('Success response from Problem Submission ',response);
      } catch (error) {
        console.log('Error Message After Problem Submission',error);
      }
     

       navigate('/');      
    }
  };

  return (
    <div className="form">
      <h1>Problem Form</h1>
      <form onSubmit={handleSubmit}>
        {Object.keys(fields).map(key => {
          if (key === 'testCases') {
            return (
              <div key={key}>
                <label>
                  {fields[key]}:
                </label>
                {formData.testCases.map((testCase, index) => (
                  <div key={index} className="test-case">
                    <textarea
                      type="text"
                      value={testCase.input}
                      onChange={(e) => handleTestCaseChange(e, index, 'input')}
                      placeholder={`Test Case ${index + 1} Input`}
                      className={errors[`input_${index}`] ? 'error' : ''}
                    />
                    <span className="error-message">{errors[`input_${index}`]}</span>
                    <textarea
                      type="text"
                      value={testCase.output}
                      onChange={(e) => handleTestCaseChange(e, index, 'output')}
                      placeholder={`Test Case ${index + 1} Output`}
                      className={errors[`output_${index}`] ? 'error' : ''}
                    />
                    <span className="error-message">{errors[`output_${index}`]}</span>
                  </div>
                ))}
              </div>
            );
          }

          return (
            <label key={key}>
              {fields[key]}:
              {key === 'code' ? (
                <textarea
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  placeholder={`Enter ${fields[key]}`}
                  rows="10"
                />
              ) : key === 'example' || key === 'Constraints' || key === 'topics' ? (
                <textarea
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  placeholder={`Enter ${fields[key]}`}
                />
              ) : key === 'level' ? (
                <select
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              ) : (
                <input
                  type={key === 'number' || key === 'Accepted' || key === 'Submissions' || key === 'Acceptance_Rate' ? 'number' : 'text'}
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  placeholder={`Enter ${fields[key]}`}
                />
              )}
            </label>
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
