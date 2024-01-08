const Breadcrumb = (props) => {
   const { Product } = props
   return <div>
      <div className="container">
         <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent">
               <li className="breadcrumb-item">Home</li>
               <li className="breadcrumb-item">Shop</li>
               <li className="breadcrumb-item">{Product.category}</li>
               <li className="breadcrumb-item active">{Product.Name}</li>
            </ol>
         </nav>
      </div>
   </div>
}

export default Breadcrumb
