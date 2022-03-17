const CategoryServ = require('../services/category.service')
const response = require('../utils/response')

class CategoryController {
    async create(req, res) {
        const result = await CategoryServ.create(req.body)
        res.status(201).send(response('Category created!', result))
    }

    async update(req, res) {
        const result = await CategoryServ.update(req.params.categoryId, req.body)
        res.status(200).send(response('Category updated!', result))
    }

    async getCategory(req, res) {
        const result = await CategoryServ.getCategory(req.params.categoryId)
        res.status(200).send(response('Category data!', result))
    }

    async getAllCategories(req, res) {
        const result = await CategoryServ.getAllCategories()
        res.status(200).send(response('Categories data!', result))
    }

    async deleteCategory(req, res) {
        const result = await CategoryServ.deleteCategory(req.params.categoryId)
        res.status(200).send(response('Category deleted!', result))
    }
}

module.exports = new CategoryController()