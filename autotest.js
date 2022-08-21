
// Автотесты для запроса https://swapi.dev/api/people/10

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Response time is less than one second", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});
pm.test("Check if name is Obi-Wan Kenobi", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("Obi-Wan Kenobi");
});


// Автотесты для запроса https://swapi.dev/api/planets/7

pm.test("Body matches people", function () {
    pm.expect(pm.response.text()).to.include("people");
});
pm.test("Status code name has OK", function () {
    pm.response.to.have.status("OK");
});
pm.test("Content-Type is present Date", function () {
    pm.response.to.have.header("Date");
});

// Автотесты для запроса https://swapi.dev/api/starships/5

pm.test("Status code is 200 or 201", () => {
    pm.expect(pm.response.code).to.be.oneOf([200,201]);
});
pm.test("Model starship corresponds to the length", () => {
    const responseJson = pm.response.json();
    pm.expect(responseJson.model).to.eql("Sentinel-class landing craft");
    pm.expect(responseJson.length).to.eql("38");
});
pm.test("Name contein landing", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.contain("landing");
});