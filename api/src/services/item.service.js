const Item = require('../models/item.model')
const CustomError = require('../utils/custom-error')

class ItemService {
    // Create Item
    async create(data) {
        const item = new Item(data)
        await item.save()

        return data = {
            title: item.title,
            description: item.description,
            image: item.image,
            size: item.size,
            color: item.color,
            price: item.price,
            category: item.category,
            manufacturer: item.manufacturer
        }
    }

    // Update item
    async update(itemId, data) {
        const item = await Item.findByIdAndUpdate(
            { _id: itemId },
            {$set: data},
            {new: true}
        )

        if (!item) throw new CustomError('Item not found!', 404)

        return data = {
            title: item.title,
            description: item.description,
            image: item.image,
            size: item.size,
            color: item.color,
            price: item.price,
            category: item.category,
            manufacturer: item.manufacturer
        }
    }

    // Get Item
    async getItem(itemId) {
        const item = await Item.findById({ _id: itemId })
        if(!item) throw new CustomError('Item not found!', 404)

        return {
            _id: item._id,
            title: item.title,
            description: item.description,
            image: item.image,
            size: item.size,
            color: item.color,
            price: item.price,
            category: item.category,
            manufacturer: item.manufacturer
        }
    }

    // Get All Items
    async getAllItems(query) {

        let items

        if (query.new) {
            items = await Item.find().sort({ createdAt: -1 }).limit(1)
        } else if (query.category) {
            // data = await Item.find().populate('category')
            items = await Item.find({
                category: {
                    $in: [query.category]
                }
            })
        } else {
            items = await Item.find()
        }
         
        if(!items) throw new CustomError('No item found!', 404)

        return items
    }

    // Delete item
    async deleteItem(itemId) {
        const item = await Item.findByIdAndDelete({ _id: itemId })
        if(!item) throw new CustomError('Item not found!', 404)

        return item
    }
}

module.exports = new ItemService()