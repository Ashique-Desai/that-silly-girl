import ProductCard from "./ProductCard"


const ProductList = ({ products }) => {
  return (
    <div className="block relative bg-off-white mt-6 px-6 pt-8 pb-16 text-center">
      <h2 className="text-2xl font-extrabold mb-6">
        Products
      </h2>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {
          products.map(product => (
            <ProductCard key={product.node.id} product={product} />
          ))
        }
      </div>
    </div>
  )
}

export default ProductList