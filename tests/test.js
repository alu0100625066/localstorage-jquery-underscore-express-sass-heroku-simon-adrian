var expect = chai.expect;

suite("CSV", function() {

    test("Deberia aceptar formato csv", function() {
        var original = '1,2,3,a';
        var result = calculate(original);
        expect(result).to.be.instanceof(Array);
        expect(result[0].value.toString()).to.equal("1,2,3,a");
    });

    test("Deberia aceptar formato csv incluyendo saltos de linea", function() {
        var original = '1,2,3,a\n2,3,1';
        var result = calculate(original);
        expect(result).to.be.instanceof(Array);
        expect(result[0].value.toString()).to.equal("1,2,3,a");
        expect(result[1].value.toString()).to.equal("2,3,1");

    });
});
