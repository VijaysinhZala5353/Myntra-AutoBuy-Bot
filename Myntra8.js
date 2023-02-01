//BOT version 8.3: Extra Coupon settings
const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())
const fs = require('fs').promises;
var fs2 = require('fs');

//id and address settings
var pass = 'abcd@1234';
var finalValue = "624"
var accessCode = "VZ"
var couponCode = ""
var earlyCheckOut = "no"
var mynCashAvailable = "no"
var address = "Nitin" // "Nitin", "Ayush", "Deepak"
var affiliateProgram = "PaisaWapas" //"Earnly", "PaisaWapas"
var orderPerId = 1


//product links
var product1_link = "https://ern.li/OP/lpclczvsde5"
var product1_qty = 3
var product2_link = ""
var product2_qty = 1
var product3_link = ""
var product3_qty = 1
var product4_link = ""
var product4_qty = 1
var product5_link = ""
var product5_qty = 1
var product6_link = ""
var product6_qty = 1
var product7_link = ""
var product7_qty = 1
var product8_link = ""
var product8_qty = 1
var product9_link = ""
var product9_qty = 1

//Commission Setting
if(affiliateProgram.toLowerCase() == "earnly")
{
    if(accessCode.toLowerCase() == "vz")
    {
        var myntra_affilliate_home_page = "https://ern.li/OP/7qilbkgaw2f"
    }
    else if(accessCode.toLowerCase() == "zv")
    {
        var myntra_affilliate_home_page = "https://ern.li/OP/7qilbkgaw2f"
    }
    else if(accessCode.toLowerCase() == "ms")
    {
        var myntra_affilliate_home_page = "https://ern.li/OP/7q2lbi3dday"
    }
    else if(accessCode.toLowerCase() == "bk")
    {
        var myntra_affilliate_home_page = "https://ern.li/OP/5jflbauwoy0"
    }
    else if(accessCode.toLowerCase() == "ps")
    {
        var myntra_affilliate_home_page = "https://ern.li/OP/2ntlaz2xirs"
    }
    else if(accessCode.toLowerCase() == "hr")
    {
        var myntra_affilliate_home_page = "https://ern.li/OP/5zulb23prrk"
    }
    else if(accessCode.toLowerCase() == "av")
    {
        var myntra_affilliate_home_page = "https://ern.li/OP/fcplatxg394"
    }
    else if(accessCode.toLowerCase() == "mj")
    {
        var myntra_affilliate_home_page = "https://ern.li/OP/60qlb3drjv7"
    }
    else if(accessCode.toLowerCase() == "jz")
    {
        var myntra_affilliate_home_page = "https://ern.li/OP/616lb22hpya"
    }
    else if(accessCode.toLowerCase() == "het")
    {
        var myntra_affilliate_home_page = "https://ern.li/OP/f9llay000hu"
    }
    else if(accessCode.toLowerCase() == "vh")
    {
        var myntra_affilliate_home_page = "https://ern.li/OP/60alb2n0zam"
    }
    else if(accessCode.toLowerCase() == "mz")
    {
        var myntra_affilliate_home_page = "https://ern.li/OP/7q2lbi3dday"
    }
    else if(accessCode.toLowerCase() == "jd")
    {
        var myntra_affilliate_home_page = "https://ern.li/OP/crtlbc97ppe"
    }
    else if(accessCode.toLowerCase() == "aj")
    {
        var myntra_affilliate_home_page = "https://ern.li/OP/fbdlauwj6tg"
    }
}
else if(affiliateProgram.toLowerCase() == "paisawapas")
{
    var myntra_affilliate_home_page = "https://www.myntra.com/"
}


//all links
var login_page = "https://www.myntra.com/login?referer=https://www.myntra.com/"
var otp_page = "https://www.myntra.com/otplogin?referer=https%3A%2F%2Fwww.myntra.com%2F&show=true"
var password_page = "https://www.myntra.com/login/password?referer=https%3A%2F%2Fwww.myntra.com%2F&show=false"
var cart_page = "https://www.myntra.com/checkout/cart"
var cart_page2 = "https://www.myntra.com/checkout/cart#modal"
var address_page = "https://www.myntra.com/checkout/address"
var second_address_page = "https://www.myntra.com/checkout/address#disableBack"
var payment_page = "https://www.myntra.com/checkout/payment"
var payment_page2 = "https://www.myntra.com/checkout/payment#disableBack"
var order_place_page = "https://secure.myntra.com/checkout/confirm"

//laptop setting
if(accessCode.toLowerCase() == "vz")
{
    var program_files = "Program Files"
    var laptop_name = "Admin"
    var person_name = "Vijay VZ"
}
else if(accessCode.toLowerCase() == "zv")
{
    var person_name = "Vijay ZV"
}
else if(accessCode.toLowerCase() == "ms")
{
    var program_files = "Program Files"
    var laptop_name = "Mahipat Singh Zala"
    var person_name = "Venki MS"
}
else if(accessCode.toLowerCase() == "bk")
{
    var program_files = "Program Files"
    var laptop_name = "chavd"
    var person_name = "Balvirsinh BK"
}
else if(accessCode.toLowerCase() == "ps")
{
    var program_files = "Program Files"
    var laptop_name = "PRAHLAD SINH RAO"
    var person_name = "Prahladsinh PS"
}
else if(accessCode.toLowerCase() == "hr")
{
    var program_files = "Program Files"
    var laptop_name = "Harpalsinh"
    var person_name = "Harpalsinh HR"
}
else if(accessCode.toLowerCase() == "av")
{
    var program_files = "Program Files"
    var laptop_name = "HP"
    var person_name = "Akki AV"
}
else if(accessCode.toLowerCase() == "mj")
{
    var program_files = "Program Files (x86)"
    var laptop_name = "MAYUR RAJ JADEJA"
    var person_name = "Mayur MJ"
}
else if(accessCode.toLowerCase() == "jz")
{
    var program_files = "Program Files"
    var laptop_name = "zala jaydipsinh"
    var person_name = "Jay JZ"
}
else if(accessCode.toLowerCase() == "het")
{
    var program_files = "Program Files"
    var laptop_name = "hetan"
    var person_name = "Het HR"
}
else if(accessCode.toLowerCase() == "vh")
{
    var program_files = "Program Files"
    var laptop_name = "VIPUL PATEL"
    var person_name = "Vipul VP"
}
else if(accessCode.toLowerCase() == "mz")
{
    var program_files = "Program Files"
    var laptop_name = "ADMIN"
    var person_name = "Venki MZ"
}
else if(accessCode.toLowerCase() == "jd")
{
    var program_files = "Program Files"
    var laptop_name = "DELL"
    var person_name = "JAY JD"
}
else if(accessCode.toLowerCase() == "aj")
{
    var program_files = "Program Files"
    var laptop_name = "LENOVO"
    var person_name = "Ajay AJ"
}

async function clearData()
{
    var client = await page.target().createCDPSession();
    await client.send('Network.clearBrowserCache');
    await client.send('Network.clearBrowserCookies');
}
async function closing()
{
    await page.close()
    await browser.close()
}

async function givePage()
{
    if(accessCode.toLowerCase() == "zv")
    {
        browser = await puppeteer.launch({
            executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
            userDataDir : `/Users/vijaysinh/Library/Application Support/Google/Chrome/Profile ${random_number}`,
            headless: false,
            defaultViewport: null,
            args: [
                //'--auto-open-devtools-for-tabs',
                '--disable-dev-shm-usage',
                '--disable-site-isolation-trials',
                '--start-maximized',
                '--incognito',
                '--start-fullscreen'
            ]
        });
    }
    else
    {
        browser = await puppeteer.launch({
            executablePath: `C:\\${program_files}\\Google\\Chrome\\Application\\chrome.exe`,
            //userDataDir : `C:\\Users\\${laptop_name}\\AppData\\Local\\Google\\Chrome\\User Data`,
            headless: false,
            defaultViewport: null,
            args: [
                //'--auto-open-devtools-for-tabs',
                '--disable-dev-shm-usage',
                '--disable-site-isolation-trials',
                '--incognito',
                '--start-maximized'
            ]
        });
    }
    [page] = await browser.pages() 
    return page;
}

async function emptyCart()
{
    await page.waitForSelector("span[class='myntraweb-sprite desktop-iconBag sprites-headerBag']");
    await page.waitForTimeout(1000)
    var inCartQty = await page.$$("span[data-reactid='904']");
    var cartQty = await inCartQty[0].getProperty('textContent');
    cartQty = await cartQty.jsonValue();
    if(cartQty != "0")
    {
        await page.click("span[class='myntraweb-sprite desktop-iconBag sprites-headerBag']", elem => elem.click());
        try
        {
            //div class itemComponents-base-invisibleBackDrop
            await page.waitForSelector("button[class='inlinebuttonV2-base-actionButton bulkActionStrip-desktopBulkRemove']");
            await page.waitForTimeout(250)
            await page.waitForSelector("div[class='itemComponents-base-invisibleBackDrop']",{timeout: 1000});
            await page.waitForTimeout(750)
            await page.click("div[class='itemComponents-base-invisibleBackDrop']", elem => elem.click());
            await page.waitForTimeout(500)
            await page.waitForSelector("button[class='inlinebuttonV2-base-actionButton bulkActionStrip-desktopBulkRemove']");
            await page.waitForTimeout(250)
            await page.click("button[class='inlinebuttonV2-base-actionButton bulkActionStrip-desktopBulkRemove']", elem => elem.click());
            await page.waitForTimeout(500)
            await page.waitForSelector("button[class='inlinebuttonV2-base-actionButton ']",{timeout: 1000});
            await page.click("button[class='inlinebuttonV2-base-actionButton ']", elem => elem.click());
            await page.waitForTimeout(500)
        }
        catch
        {
            try
            {
                //div class itemComponents-base-invisibleBackDrop
                await page.waitForSelector("button[class='inlinebuttonV2-base-actionButton bulkActionStrip-desktopBulkRemove']");
                await page.waitForTimeout(250)
                await page.waitForSelector("div[class='itemComponents-base-invisibleBackDrop']",{timeout: 1000});
                await page.waitForTimeout(750)
                await page.waitForSelector("button[class='inlinebuttonV2-base-actionButton bulkActionStrip-desktopBulkRemove']");
                await page.waitForTimeout(250)
                await page.click("button[class='inlinebuttonV2-base-actionButton bulkActionStrip-desktopBulkRemove']", elem => elem.click());
                await page.waitForTimeout(500)
                await page.waitForSelector("button[class='inlinebuttonV2-base-actionButton ']",{timeout: 1000});
                await page.click("button[class='inlinebuttonV2-base-actionButton ']", elem => elem.click());
                await page.waitForTimeout(500)
            }
            catch
            {
            }
        }
    }
}

async function login()
{
    await clearData()
    await page.goto(myntra_affilliate_home_page, { waitUntil: 'domcontentloaded' }); 
    await page.waitForTimeout(800)
    await page.waitForSelector("span[class='myntraweb-sprite desktop-iconUser sprites-headerUser']");
    await page.click("span[class='myntraweb-sprite desktop-iconUser sprites-headerUser']", elem => elem.click());
    await page.waitForTimeout(450)
    await page.waitForSelector("a[class='desktop-linkButton']");
    await page.click("a[class='desktop-linkButton']", elem => elem.click());
    await page.waitForTimeout(530)
    await page.waitForSelector("input[class='form-control mobileNumberInput']");
    await page.type("input[class='form-control mobileNumberInput']", `${mobile_number}`);
    await page.waitForTimeout(475)
    await page.click("div[class='submitBottomOption']", elem => elem.click());
    await page.waitForTimeout(450)
    await page.waitForSelector("div[class='bottomeLink']");
    await page.waitForTimeout(320)
    var passBtn = await page.$x('//*[@id="reactPageContent"]/div/div[3]/span');
    await passBtn[0].click()
    await page.waitForSelector("input[id='mobileNumberPass']");
    await page.type("input[class='form-control has-feedback']", `${pass}`);
    await page.waitForTimeout(500)
    await page.click("button[class='btn primary  lg block submitButton']", elem => elem.click());


    if(affiliateProgram.toLowerCase() == "earnly")
    {
        while(await page.url() != "https://www.myntra.com/?utm_source=admitad")
        {
            if(await page.url() == "https://www.myntra.com/")
            {
                break
            }
            await page.waitForTimeout(2000)
            try
            {
                await page.click("button[class='btn primary  lg block submitButton']", elem => elem.click());
                await page.waitForTimeout(500)
            }
            catch
            {}
        }
    }
    else if(affiliateProgram.toLowerCase() == "paisawapas")
    {
        while(await page.url() != "https://www.myntra.com/?utm_source=clickonik")
        {
            if(await page.url() == "https://www.myntra.com/")
            {
                break
            }
            await page.waitForTimeout(2000)
            try
            {
                await page.click("button[class='btn primary  lg block submitButton']", elem => elem.click());
                await page.waitForTimeout(500)
            }
            catch
            {}
        }
    }
    await emptyCart()
}
async function tryToAddProduct(product_link)
{
    await page.goto(product_link, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500)
    await page.waitForSelector("span[class='myntraweb-sprite pdp-whiteBag sprites-whiteBag pdp-flex pdp-center']");
    await page.click("span[class='myntraweb-sprite pdp-whiteBag sprites-whiteBag pdp-flex pdp-center']", elem => elem.click());
    await page.waitForTimeout(500)
}

async function addProduct()
{
    if(product1_link != "")
    {
        await tryToAddProduct(product1_link)
        if(product2_link != "")
        {
            await tryToAddProduct(product2_link)
            if(product3_link != "")
            {
                await tryToAddProduct(product3_link)
                if(product4_link != "")
                {
                    await tryToAddProduct(product4_link)
                    if(product5_link != "")
                    {
                        await tryToAddProduct(product5_link)
                        if(product6_link != "")
                        {
                            await tryToAddProduct(product6_link)
                            if(product7_link != "")
                            {
                                await tryToAddProduct(product7_link)
                                if(product8_link != "")
                                {
                                    await tryToAddProduct(product8_link)
                                    if(product9_link != "")
                                    {
                                        await tryToAddProduct(product9_link)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    await page.waitForTimeout(800)
    //pdp-goToCart pdp-add-to-bag-with-prior pdp-add-to-bag pdp-button pdp-flex pdp-center 
    try
    {
        await page.waitForSelector("a[class='pdp-goToCart pdp-add-to-bag pdp-button pdp-flex pdp-center ']",{timeout: 3000});
        await page.click("a[class='pdp-goToCart pdp-add-to-bag pdp-button pdp-flex pdp-center ']", elem => elem.click());
    }
    catch
    {
        await page.waitForSelector("a[class='pdp-goToCart pdp-add-to-bag-with-prior pdp-add-to-bag pdp-button pdp-flex pdp-center ']",{timeout: 3000});
        await page.click("a[class='pdp-goToCart pdp-add-to-bag-with-prior pdp-add-to-bag pdp-button pdp-flex pdp-center ']", elem => elem.click());
    }
    while(await page.url() != cart_page)
    {
        await page.waitForTimeout(800)
        try
        {
            try
            {
                await page.waitForSelector("a[class='pdp-goToCart pdp-add-to-bag pdp-button pdp-flex pdp-center ']",{timeout: 3000});
                await page.click("a[class='pdp-goToCart pdp-add-to-bag pdp-button pdp-flex pdp-center ']", elem => elem.click());
                await page.waitForTimeout(500)
            }
            catch
            {
                await page.waitForSelector("a[class='pdp-goToCart pdp-add-to-bag-with-prior pdp-add-to-bag pdp-button pdp-flex pdp-center ']",{timeout: 3000});
                await page.click("a[class='pdp-goToCart pdp-add-to-bag-with-prior pdp-add-to-bag pdp-button pdp-flex pdp-center ']", elem => elem.click());
                await page.waitForTimeout(500)
            }
        }
        catch
        {}
    }
}

async function getQty(product_qty,product_number)
{
    if(product_qty != 1)
    {
        try
        {
            var qty_button = await page.$x(`//*[@id="cartItemsList"]/div[${product_number}]/div/div/div[2]/div[2]/div/div[3]/div[1]/div[2]`)
            await qty_button[0].click() 
        }
        catch
        {
            var qty_button = await page.$x(`//*[@id="cartItemsList"]/div[${product_number}]/div/div/div[2]/div[2]/div/div[4]/div[1]/div[2]`)
            await qty_button[0].click() 
        } 
        await page.waitForTimeout(500)
        while(await page.url() != cart_page2)
        {
            try
            {
                var qty_button = await page.$x(`//*[@id="cartItemsList"]/div[${product_number}]/div/div/div[2]/div[2]/div/div[3]/div[1]/div[2]`)
                await qty_button[0].click() 
            }
            catch
            {
                var qty_button = await page.$x(`//*[@id="cartItemsList"]/div[${product_number}]/div/div/div[2]/div[2]/div/div[4]/div[1]/div[2]`)
                await qty_button[0].click() 
            } 
            await page.waitForTimeout(500)
        }
        await page.waitForSelector("div[class='dialogs-base-display']");
        if(product_qty == 0)
        {
            try
            {
                var select_qty_button = await page.$x(`//*[@id="10"]`)
                await select_qty_button[0].click()
            }
            catch
            {
                try
                {
                    var select_qty_button = await page.$x(`//*[@id="9"]`)
                    await select_qty_button[0].click()
                }
                catch
                {
                    try
                    {
                        var select_qty_button = await page.$x(`//*[@id="8"]`)
                        await select_qty_button[0].click()
                    }
                    catch
                    {
                        try
                        {
                            var select_qty_button = await page.$x(`//*[@id="7"]`)
                            await select_qty_button[0].click()
                        }
                        catch
                        {
                            try
                            {
                                var select_qty_button = await page.$x(`//*[@id="6"]`)
                                await select_qty_button[0].click()
                            }
                            catch
                            {
                                try
                                {
                                    var select_qty_button = await page.$x(`//*[@id="5"]`)
                                    await select_qty_button[0].click()
                                }
                                catch
                                {
                                    try
                                    {
                                        var select_qty_button = await page.$x(`//*[@id="4"]`)
                                        await select_qty_button[0].click()
                                    }
                                    catch
                                    {
                                        try
                                        {
                                            var select_qty_button = await page.$x(`//*[@id="3"]`)
                                            await select_qty_button[0].click()
                                        }
                                        catch
                                        {
                                            try
                                            {
                                                var select_qty_button = await page.$x(`//*[@id="2"]`)
                                                await select_qty_button[0].click()
                                            }
                                            catch
                                            {
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        else
        {
            await page.waitForTimeout(700)
            var select_qty_button = await page.$x(`//*[@id="${product_qty}"]`)
            await select_qty_button[0].click()
            try
            {
                await select_qty_button[0].click()
            }
            catch
            {}
        }
        await page.waitForTimeout(1000)
        ////*[@id="cartItemsList"]/div[2]/div/div/div[2]/div[4]/div/button/div
        var qty_done_button = await page.$x(`//*[@id="cartItemsList"]/div[${product_number}]/div/div/div[2]/div[4]/div/button/div`)
        await qty_done_button[0].click()  
        await page.waitForTimeout(500)
    }
}

async function setQty()
{
    try
    {
        await page.waitForSelector("path[d='M0 0h6L3 3z']");
        await page.waitForTimeout(500)
        try
        {
            await page.waitForSelector("div[class='itemComponents-base-invisibleBackDrop']",{timeout: 1000});
            await page.waitForTimeout(500)
            var got_it_button = await page.$x(`//*[@id="cartItemsList"]/div/div/div/div[2]/div[1]/div/div[1]`)
            await got_it_button[0].click() 
            await page.waitForTimeout(500)
        }
        catch
        {}
        product_number = 0
        await getQty(product1_qty,product_number+1)
        await getQty(product2_qty,product_number+2)
        await getQty(product3_qty,product_number+3)
        await getQty(product4_qty,product_number+4)
        await getQty(product5_qty,product_number+5)
        await getQty(product6_qty,product_number+6)
        await getQty(product7_qty,product_number+7)
        await getQty(product8_qty,product_number+8)
        await getQty(product9_qty,product_number+9)
    }
    catch
    {
    }

}
async function priceChecker()
{
    await page.waitForTimeout(500)
    try
    {
        try
        {
            try
            {
                var cart_value = await page.$x('//*[@id="priceBlock"]/div[6]/span[2]/span[2]');
                cart_price = await page.evaluate(el => el.textContent, cart_value[0])
            }
            catch
            {
                var cart_value = await page.$x('//*[@id="priceBlock"]/div[5]/span[2]/span[2]');
                cart_price = await page.evaluate(el => el.textContent, cart_value[0])
            }
        }
        catch
        {
            var cart_value = await page.$x('//*[@id="priceBlock"]/div[4]/span[2]/span[2]');
            cart_price = await page.evaluate(el => el.textContent, cart_value[0])
        }
    }
    catch
    {
        var cart_value = await page.$x('//*[@id="priceBlock"]/div[3]/span[2]/span[2]');
        cart_price = await page.evaluate(el => el.textContent, cart_value[0])
    }   
}

async function applyCoupon()
{
    try
    {
        await page.waitForSelector("div[class='css-xjhrni']");
        try
        {
            var apply_coupon1 = await page.$x('//*[@id="appContent"]/div/div/div/div/div[2]/div[1]/div/div[1]/div[3]/button/div')
            await apply_coupon1[0].click()
            await page.waitForTimeout(500)
        }
        catch
        {
            var apply_coupon2 = await page.$x('//*[@id="appContent"]/div/div/div/div/div[2]/div[1]/div/div[1]/div[2]/button/div')
            await apply_coupon2[0].click()
            await page.waitForTimeout(500)
        }

        await page.waitForTimeout(500)
        await page.waitForSelector("input[id='coupon-input-field']", {timeout:2000});
        await page.type("input[id='coupon-input-field']", `${couponCode}`);
        await page.waitForTimeout(500)
        await page.click("div[class='couponsForm-base-applyButton couponsForm-base-enabled']", elem => elem.click());
        await page.waitForTimeout(500)
        var after_coupon_apply = await page.$x('//*[@id="applyCoupon"]/div')
        await after_coupon_apply[0].click()
        await page.waitForTimeout(500)
    }
    catch
    {}
}

async function clickCoupon()
{
    try
    {
        await page.waitForSelector("div[class='css-xjhrni']",{timeout: 1500});
        await page.click("button[class='css-dn3et']", elem => elem.click());
        await page.waitForTimeout(500)
        await page.waitForSelector("button[class='css-18vuiko']",{timeout: 1500});
        await page.click("button[class='css-18vuiko']", elem => elem.click());
        await page.waitForTimeout(500)
    }
    catch
    {}
}

async function setPrice()
{
    await page.waitForSelector("div[class='css-xjhrni']");
    await page.waitForTimeout(500)
    await priceChecker()
    if(finalValue == "")
    {
        while(await page.url() == cart_page || cart_page2)
        {
            await page.waitForTimeout(1000)
        }
    }
    else
    {
        await page.waitForTimeout(1000)
        if(couponCode != "")
        {
            await applyCoupon()
        }
        await page.waitForTimeout(1200)
        if(cart_price != finalValue)
        {
            await clickCoupon()
        }
        while(cart_price != finalValue)
        {
            await page.waitForTimeout(1000)
            await priceChecker()
        }
    }
    while(await page.url() != address_page)
    {
        if(await page.url() == second_address_page)
        {
            break
        }
        try
        {
            await page.waitForTimeout(500)
            await page.click("button[class='css-etguer']", elem => elem.click());
            await page.waitForTimeout(700)
            if(earlyCheckOut.toLowerCase() == "yes")
            {
                while(await page.url() != address_page)
                {
                    await page.waitForTimeout(1000)
                    if(await page.url() == second_address_page)
                    {
                        break;
                    }
                }
            }
        }
        catch
        {
        }
    }
}

async function setAddress()
{
    try
    {
        await page.waitForSelector("div[class='addressList-base-addAddressButton']",{timeout: 3000});
        await page.waitForTimeout(500)
        var add_new_address = await page.$x('//*[@id="appContent"]/div/div/div/div/div[1]/div/div[1]/div[2]/div')
        await add_new_address[0].click()
        await page.waitForTimeout(500)
    }
    catch
    {}
    try
    {
        if(address.toLowerCase() == "nitin")
        {
            await page.waitForTimeout(500)
            await page.type("input[id='name']", `${person_name}`);
            await page.waitForTimeout(100)
            await page.type("input[id='mobile']", `${mobile_number}`);
            await page.waitForTimeout(200)
            await page.type("input[id='pincode']", `452012`);
            await page.waitForTimeout(300)
            await page.type("input[id='streetAddress']", `House no. ${random_number}, marble mandi, near shakti tol kaata`);
            await page.waitForTimeout(400)
            await page.type("input[id='locality']", `Silicon City`);
        }
        else if(address.toLowerCase() == "ayush")
        {
            await page.waitForTimeout(500)
            await page.type("input[id='name']", `Ayush ${person_name}`);
            await page.waitForTimeout(100)
            await page.type("input[id='mobile']", `${mobile_number}`);
            await page.waitForTimeout(200)
            await page.type("input[id='pincode']", `464990`);
            await page.waitForTimeout(300)
            await page.type("input[id='streetAddress']", `House no. ${random_number}, marble mandi, Ayush Singh`);
            await page.waitForTimeout(400)
            await page.type("input[id='locality']", `goharganj`);
        }
        else if(address.toLowerCase() == "deepak")
        {
            await page.waitForTimeout(500)
            await page.type("input[id='name']", `Gabbar ${person_name}`);
            await page.waitForTimeout(100)
            await page.type("input[id='mobile']", `${mobile_number}`);
            await page.waitForTimeout(200)
            await page.type("input[id='pincode']", `462001`);
            await page.waitForTimeout(300)
            await page.type("input[id='streetAddress']", `House no. ${random_number}, T ward newar christ memorail school`);
            await page.waitForTimeout(400)
            await page.type("input[id='locality']", `Bairagarh`);
        }
        await page.waitForTimeout(500)
        await page.click("div[class='button-base-button addressFormUI-base-saveBtn ']", elem => elem.click());
        await page.waitForTimeout(1000)
    }
    catch
    {}

    try
    {
        await page.waitForSelector("div[class='button-base-button addressDesktop-base-continueBtn ']", {timeout:1500});
        await page.click("div[class='button-base-button addressDesktop-base-continueBtn ']", elem => elem.click());
        await page.waitForTimeout(500)
    }
    catch
    {
    }
    while(await page.url() == address_page || await page.url() == second_address_page)
    {
        await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
        await page.waitForTimeout(500)
        try
        {
            await page.click("div[class='button-base-button addressFormUI-base-saveBtn ']", elem => elem.click());
            await page.waitForTimeout(500)
        }
        catch
        {
            try
            {
                await page.waitForSelector("div[class='button-base-button addressDesktop-base-continueBtn ']", {timeout:1000});
                await page.click("div[class='button-base-button addressDesktop-base-continueBtn ']", elem => elem.click());
                await page.waitForTimeout(500)
            }
            catch
            {}
        }
    }

}

async function fillCaptcha()
{
    if(mynCashAvailable.toLowerCase() == "yes")
    {
        while(await page.url() != payment_page)
        {
            if(await page.url() == payment_page)
            {
                break
            }
            else if(await page.url() == payment_page2)
            {
                break
            }
        }
        await page.waitForSelector("svg[class='lpCheckbox credits-base-checkbox ']", {timeout:2000});
        await page.waitForTimeout(1000)
        await page.click("svg[class='lpCheckbox credits-base-checkbox ']", elem => elem.click());
        await page.waitForTimeout(500)
    }

    while(true)
    {
        try
        {
            await page.waitForNavigation(2000);
            order_place_link = await page.url()
            order_place_link = order_place_link.slice(0,42)
            if(order_place_link != order_place_page)
            {
                continue
            }
            await page.waitForTimeout(1000)
            date = new Date()
            var day = date.getDate()
            var month = date.getMonth()+1
            var time = date.getHours()
            var min = date.getMinutes()
            var sec = date.getSeconds()
            if(day < 10)
            {
                day = '0'+day
            } 
            if(month < 10)
            {
                month = '0'+month
            }
            if(time < 10)
            {
                time = '0'+time
            }
            if(min < 10)
            {
                min = '0'+min
            }
            if(sec < 10)
            {
                sec = '0'+sec
            }
            console.log(`ID: ${mobile_number}, Order By: ${accessCode}, Time: ${time}:${min} , Date: ${day}/${month}, Value: ${finalValue}`)
            await page.waitForTimeout(500)
            break
        }
        catch
        {

        }
    }

}

async function removeNumber()
{
    const removeLines = (data, lines = []) => {
        return data
            .split('\n')
            .filter((val, idx) => lines.indexOf(idx) === -1)
            .join('\n');
    }
    fs2.readFile('number.txt', 'utf8', (err, data) => {
        if (err) throw err;
        fs2.writeFile('number.txt', removeLines(data, [0]), 'utf8', function(err) {
            if (err) throw err;
        });
    })
}

async function run()
{
    
    mobile_number_array = fs2.readFileSync('number.txt').toString().split("\n");
    var i = 0;
    while(i<mobile_number_array.length)
    {
        random_number = Math.floor((Math.random() * 10000) + 1000);
        mobile_number = mobile_number_array[i];
        mobile_number = mobile_number.replace(/\s+/g, '');
        mobile_number = mobile_number.replace(",", "");
        await givePage()
        await login()
        for(var j=1; j<=orderPerId; j++)
        {
            
            random_number = Math.floor((Math.random() * 9999) + 1000);
            await addProduct()
            
            await setQty()
            await setPrice()
            await setAddress()
            
            try
            {
                await fillCaptcha()
            }
            catch
            {
                console.log(`${mobile_number} ma myncash nathi`)
                break
            }
        }
        await closing()
        await removeNumber()
        i += 1;
    }
}
run()

/*
puppeteer-extra-plugin-minmax
Minimize and maximize puppeteer in real time.
Great for manually solving captchas.
*/