import React from "react";
import SelectInput from "../toolbox/SelectInput";
import TextInput from "../toolbox/TextInput";

const ProductDetail = ( {categories, product, onSave, onChange }) => {
  console.log(product.productName)
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
      <TextInput
        name="ProductName"
        label="Product Name"
        value={product.productName}
        onChange={onChange}
        error="Hata"
      />
      <SelectInput
        name="CategoryId"
        label="Category"
        value={product.categoryId || ""}
        defaulOption="Seçiniz"
        options={categories.map((category) => ({
          value: category.id,
          text: category.categoryName,
        }))}
        onChange={onChange}
        error="Hata"
      />
      <TextInput
        name="quantityPerUnit"
        label="quantityPerUnit"
        value={product.quantityPerUnit}
        onChange={onChange}
        error="Hata"
      />
      <TextInput
        name="unitPrice"
        label="unitPrice"
        value={product.unitPrice}
        onChange={onChange}
        error="Hata"
      />
      <TextInput
        name="unitsInStock"
        label="unitsInStock"
        value={product.unitsInStock}
        onChange={onChange}
        error="Hata"
      />
      <SelectInput
        name="CategoryId"
        label="Category"
        value={product.categoryId || ""}
        defaulOption="Seçiniz"
        options={categories.map((category) => ({
          value: category.id,
          text: category.categoryName,
        }))}
        onChange={onChange}
        error="Hata"
      />
      <div className="mt-2"></div>
      <button type="submit" className="btn btn-success">
        Kaydet
      </button>
    </form>
  );
};
export default ProductDetail;
