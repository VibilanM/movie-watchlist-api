const validateRequest = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({ errors: result.error.errors.map((e) => e.message) });
    }

    req.body = result.data;
    next();
};

const validateParams = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.params);

    if (!result.success) {
        return res.status(400).json({ errors: result.error.errors.map((e) => e.message) });
    }

    next();
};

export { validateRequest, validateParams };