
export default function DropDowns({value,img}) {
  return (
    <>
    <p className='flex-wrap flex bg-slate-200 rounded-2xl p-2'>{value}<img src={img} alt={value} className='w-4 h-4 mt-1 ml-2' /></p>
    </>
  )
}
