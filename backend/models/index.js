const { sequelize } = require('../config/db');

// Import models from individual files
const Brand = require('./brand.model');
const Category = require('./category.model');
const User = require('./user.model');
const Address = require('./address.model');
const Warehouse = require('./warehouse.model');
const Product = require('./product.model');
const ProductVariant = require('./productVariant.model');
const Order = require('./order.model');
const OrderItem = require('./orderItem.model');
const Payment = require('./payment.model');
const Refund = require('./refund.model');
const RefundItem = require('./refundItem.model');
const Inventory = require('./inventory.model');
const ProductImage = require('./productImage.model');
const AuditLog = require('./auditLog.model');
const OrderAddress = require('./orderAddress.model');

const models = {
  Brand,
  User,
  Address,
  Warehouse,
  Category,
  Product, 
  ProductVariant,
  ProductImage,
  Inventory,
  OrderAddress,
  Order,
  OrderItem,
  Payment,
  Refund,
  RefundItem,
  AuditLog
};

Object.values(models).forEach(model => {
  if (model.associate) {
    model.associate(models); // Pass models to associate function
  }
});



// Export models
module.exports = {
  sequelize,
  models,
  Refund,
  RefundItem,
  Address,
  AuditLog,
  Brand,
  Category,
  Inventory,
  Order,
  OrderAddress,
  OrderItem,
  Payment,
  Product,
  ProductImage,
  ProductVariant,
  User,
  Warehouse
};