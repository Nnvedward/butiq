const Category = require('../models/category.model')
const CustomError = require('../utils/custom-error')

class CategoryService {
    // Create category
    async create(data) {
        const category = new Category(data)
        await category.save()

        return data = {
            category: category.name
        }
    }

    // Update category
    async update(categoryId, data) {
        const category = await Category.findByIdAndUpdate(
            { _id: categoryId },
            { $set: data },
            { new: true }
        )

        if (!category) throw new CustomError('category not found!', 404)

        return data = {
            category: category.name
        }
    }

    // Get category
    async getCategory(categoryId) {
        const category = await Category.findById({ _id: categoryId })
        if (!category) throw new CustomError('category not found!', 404)

        return category
    }

    // Get all categories
    async getAllCategories() {
        const categories = await Category.find()
        if (!categories) throw new CustomError('No category found!', 404)

        return categories
    }

    // Delete category
    async deleteCategory(categoryId) {
        const category = await Category.findByIdAndDelete({ _id: categoryId })

        if (!category) throw new CustomError('Category not found!', 404)

        return category
    }
}

module.exports = new CategoryService()