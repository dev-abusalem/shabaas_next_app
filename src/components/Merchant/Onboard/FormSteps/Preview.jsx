import React from 'react'

const Preview = ({formData , prevStep , currentStep }) => {


  return (
    <div>
    <h2 className='text-xl font-bold md:text-3xl mb-7 text-center underline text-primary'>Review Your Form</h2>

        <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-left text-sm font-light">
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr className='text-center'>
              <th scope="col" class="px-6 py-4">Summary</th>
              <th scope="col" class="px-6 py-4">Name</th>
              <th scope="col" class="px-6 py-4">ABN</th>
              <th scope="col" class="px-6 py-4">Operation</th>
              <th scope="col" class="px-6 py-4">Website</th>
              <th scope="col" class="px-6 py-4">KYC process?</th>
              <th scope="col" class="px-6 py-4">BSB or PayID</th>
              <th scope="col" class="px-6 py-4">PayID Domain</th>
              <th scope="col" class="px-6 py-4">Azupay email</th>
              <th scope="col" class="px-6 py-4">Role</th>
              <th scope="col" class="px-6 py-4">User Experience</th>
              <th scope="col" class="px-6 py-4">Other</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b dark:border-neutral-500 text-center">
              <td class="whitespace-nowrap px-6 py-4">{formData.summary}</td>
              <td class="whitespace-nowrap px-6 py-4">{formData.clensubmerchant}</td>
              <td class="whitespace-nowrap px-6 py-4">{formData.abnsubmerchant}</td>
              <td class="whitespace-nowrap px-6 py-4">{formData.iosubmerchant}</td>
              <td class="whitespace-nowrap px-6 py-4">{formData.websubmerchant}</td>
              <td class="whitespace-nowrap px-6 py-4">{formData.hsubmerchantpassddkyc}</td>
              <td class="whitespace-nowrap px-6 py-4">{formData.sbsbacnumpayidsetacc}</td>
              <td class="whitespace-nowrap px-6 py-4">{formData.payiddomsubmerchant}</td>
              <td class="whitespace-nowrap px-6 py-4">{formData.azupayclidasumailaddforlog}</td>
              <td class="whitespace-nowrap px-6 py-4">{formData.trolforthedashuser}</td>
              <td class="whitespace-nowrap px-6 py-4">xxxxxxxxxxxx</td>
              <td class="whitespace-nowrap px-6 py-4">xxxxxxxxxxxx</td>
            </tr>
            
          </tbody>
        </table>

        <div className='flex items-center py-4 gap-5'>

          {currentStep !== 1 && (
                        <button onClick={prevStep} type="button" className="text-white bg-slate-600 hover:opacity-80 duration-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary">Previous</button>
                    )}
          <button type="submit" className="text-white bg-green-700 hover:opacity-80 duration-100 focus:ring-4 focus:outline-none focus:ring-green-700 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-green-700 dark:hover:bg-green-700 dark:focus:ring-green-700">Submit</button>

        </div>

      </div>
    </div>
  </div>
</div> 
    </div>
  )
}

export default Preview