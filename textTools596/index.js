module.exports = async function (context, req) {
    let text = req.body.text;
    let symbol = req.body.symbol;
    let uppercase = req.query.caps;

    if(symbol.length !== 1) {
        context.res = {
            status: 400,
            body: "Symbol must be exactly one character"
        };
        return;
    }
    text = text.replace(/\s+/g, ' ');
    text = text.toLowerCase();
    symbol = symbol.toLowerCase();
    let textLength = text.trim().split(/\s+/).length;
    let symbolsInText = (text.match(new RegExp(symbol, "g"))).length
    if(uppercase === "true") {
        text = text.toUpperCase();
    }

    const responseMessage = text
        ? `Text: ${text}, symbol: ${symbol}, Word Count: ${textLength}, symbol Count: ${symbolsInText}`
        : "Missing Requirement";
    context.res = {
        body: responseMessage
    };
};