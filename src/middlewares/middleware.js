
export const modifyResponseWithData = (req, res, next) => {

    res.body.message= {
        "Data": res.body.message,
    }

    next();
}