# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


<div className="list-product">
      <h2>All Products List</h2>
      
      <div className="listproduct-allproducts">
      {Array.isArray(allproducts) && allproducts.length > 0 ? (
          allproducts.map((product, i) => (
            <tr key={i}>
              <td>{product.id}</td>
              <td>
                <img src={product.image} alt="" className="listproduct-product-icon" />
              </td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.discount}</td>
              <td>{product.category}</td>
              <td>
                <RxCross2 className="listproduct-remove-icon" />
                </td>
              </tr>
          ))
         
        ) : (
          <p>No products available</p>
        )}
        
      </div>
    </div>
  </>