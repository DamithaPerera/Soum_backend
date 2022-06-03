const categoryController = require("../../module/productCategory/productCategory.controller");
const categoryModel = require("../../models/productCategory");
const httpMocks = require("node-mocks-http");
const categoryMock = require("../mock-data/newcategory.json");
const allCategory = require("../mock-data/allcategories.json");

categoryModel.create = jest.fn();
categoryModel.find = jest.fn();
categoryModel.findById = jest.fn();
let req, res, next;
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = jest.fn();
});

describe("Category Controller add category", () => {
    beforeEach(() => {
        req.body = categoryMock;
    });

    it("should have add category function", () => {
        expect(typeof categoryController.addProductCategoryController).toBe("function");
    });
    it("should create category schema model ", async () => {
        await categoryController.addProductCategoryController(req, res, next);
        expect(categoryModel.create).toBeCalledWith(categoryMock);
    });

    it("should return response 201 ", async () => {
        await categoryController.addProductCategoryController(req, res, next);
        expect(res.statusCode).toBe(201);
        expect(res._isEndCalled()).toBeTruthy();
    });
    it("should return json body in response ", async () => {
        await categoryModel.create.mockReturnValue(categoryMock);
        await categoryController.addProductCategoryController(req, res, next);
        expect(res._getJSONData());
    });

});

describe("Category Controller get all categories", () => {
    it("should have get all categories function", () => {
        expect(typeof categoryController.getAllProductCategoryController).toBe("function");
    });
    it("should called categoryModel.find({})", async () => {
        await categoryController.getAllProductCategoryController(req, res, next);
        const skip = 0
        const limit = 3
        expect(categoryModel.find({}, {}, {skip, limit}))
    });

    it("should return response 200 ", async () => {
        await categoryModel.find.mockReturnValue(allCategory);
        await categoryController.getAllProductCategoryController(req, res, next);
        expect(res.statusCode).toBe(200);
        expect(res._isEndCalled()).toBeTruthy();
        expect(res._getJSONData()).toStrictEqual(allCategory);
    });

});
describe("Category Controller get category by id", () => {
    it("should have get category by id function", () => {
        expect(typeof categoryController.getOneProductCategoryController).toBe("function");
    });
    it("should called categoryModel.findById({})", async () => {
        req.params.id = "5e9f8f8f8f8f8f8f8f8f8f8";
        await categoryController.getOneProductCategoryController(req, res, next);
        expect(categoryModel.findById).toHaveBeenCalledWith(req.params.id);
    });
    it("should return response 200 ", async () => {
        await categoryModel.findById.mockReturnValue(categoryMock);

        await categoryController.getOneProductCategoryController(req, res, next);
        expect(res.statusCode).toBe(200);
        expect(res._getJSONData()).toStrictEqual(categoryMock);
        expect(res._isEndCalled()).toBeTruthy();
    });
});
