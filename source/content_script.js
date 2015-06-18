walk(document.body);

function walk(node) 
{
	// I ripped/altered all this code from here:
	// http://is.gd/5C5GHb
	// and they took it from here:
	// http://is.gd/mwZp7E
	// I hope this is okay. Please don't hurt me.
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;
	
	// For this section I included all of the 'Most Valuable Brands' according to [redacted magazine]
	// and the top brands on social media according to [another redacted magazine]
	// and any others I could think of, I probably missed a lot of them, I'm sorry.
	
	// McDonald's
	v = v.replace(/\bMcDonald's\b/g, "██████████");
	v = v.replace(/\bmcdonald's\b/g, "██████████");
	v = v.replace(/\bMcDonalds\b/g, "██████████");
	v = v.replace(/\bmcdonalds\b/g, "██████████");
	
	// KFC
	v = v.replace(/\bKFC\b/g, "███");
	v = v.replace(/\bkfc\b/g, "███");
	v = v.replace(/\bKentucky Fried Chicken\b/g, "████████ █████ ███████");
	v = v.replace(/\bkentucky fried chicken\b/g, "████████ █████ ███████");
	
	// Burger King
	v = v.replace(/\bBurger King\b/g, "██████ ████");
	v = v.replace(/\bburger king\b/g, "██████ ████");
	v = v.replace(/\bBurgerKing\b/g, "██████ ████");
	v = v.replace(/\bburgerking\b/g, "██████ ████");
	
	// Wendy's
	v = v.replace(/\bWendy's\b/g, "███████");
	v = v.replace(/\bwendy's\b/g, "███████");
	v = v.replace(/\bWendys\b/g, "███████");
	v = v.replace(/\bwendys\b/g, "███████");
	
	// Taco Bell
	v = v.replace(/\bTaco Bell\b/g, "█████████");
	v = v.replace(/\btaco bell\b/g, "█████████");
	v = v.replace(/\bTacoBell\b/g, "█████████");
	v = v.replace(/\btacobell\b/g, "█████████");
	
	
	// Pizza Hut
	v = v.replace(/\bPizza Hut\b/g, "█████████");
	v = v.replace(/\bPizzaHut\b/g, "█████████");
	v = v.replace(/\bpizza hut\b/g, "█████████");
	v = v.replace(/\bpizzahut\b/g, "█████████");
	
	// Denny's
	v = v.replace(/\bDenny's\b/g, "███████");
	v = v.replace(/\bdenny's\b/g, "███████");
	v = v.replace(/\bDennys\b/g, "███████");
	v = v.replace(/\bdennys\b/g, "███████");
	
	// Starbucks
	v = v.replace(/\bStarbucks\b/g, "█████████");
	v = v.replace(/\bstarbucks\b/g, "█████████");
	
	// Subway
	v = v.replace(/\bSubway\b/g, "██████");
	v = v.replace(/\bsubway\b/g, "██████");
	
	
	// Jack in the Box
	v = v.replace(/\bJack In The Box\b/g, "███████████████");
	v = v.replace(/\bjack in the box\b/g, "███████████████");
	v = v.replace(/\bJack in the Box\b/g, "███████████████");
	v = v.replace(/\bjackinthebox\b/g, "███████████████");
	v = v.replace(/\bJackInTheBox\b/g, "███████████████");
	
	// Domino's
	v = v.replace(/\bDomino's\b/g, "███████");
	v = v.replace(/\bdomino's\b/g, "███████");
	v = v.replace(/\bdominos\b/g, "███████");
	v = v.replace(/\bDominos\b/g, "███████");
	
	// Chick-fil-A
	v = v.replace(/\bChick-fil-A\b/g, "███████████");
	v = v.replace(/\bchick-fil-a\b/g, "███████████");
	v = v.replace(/\bchick-fil-a\b/g, "███████████");
	v = v.replace(/\bChickfilA\b/g, "███████████");
	
	// Dunkin' Donuts
	v = v.replace(/\bDunkinDonuts\b/g, "████████████");
	v = v.replace(/\bdunkindonuts\b/g, "████████████");
	v = v.replace(/\bDunkin' Donuts\b/g, "████████████");
	v = v.replace(/\bdunkin' donuts\b/g, "██████████████");
	
	// Arby's
	v = v.replace(/\bArby's\b/g, "██████");
	v = v.replace(/\bArbys\b/g, "██████");
	v = v.replace(/\barby's\b/g, "██████");
	v = v.replace(/\barbys\b/g, "██████");
	
	// Walmart
	v = v.replace(/\bWalmart\b/g, "███████");
	v = v.replace(/\bwalmart\b/g, "███████");
	v = v.replace(/\bwal-mart\b/g, "███████");
	v = v.replace(/\bWal-Mart\b/g, "███████");
	v = v.replace(/\bWal Mart\b/g, "███████");
	v = v.replace(/\bwal mart\b/g, "███████");
	
	// Hardee's
	v = v.replace(/\bHardee's\b/g, "████████");
	v = v.replace(/\bhardee's\b/g, "████████");
	v = v.replace(/\bHardees\b/g, "████████");
	v = v.replace(/\bhardees\b/g, "████████");
	
	// Microsoft
	v = v.replace(/\bMicrosoft\b/g, "█████████");
	v = v.replace(/\bmicrosoft\b/g, "█████████");
	
	// Apple
	v = v.replace(/\bApple\b/g, "█████");
	v = v.replace(/\bapple\b/g, "█████");
	
	// Google
	v = v.replace(/\bGoogle\b/g, "██████");
	v = v.replace(/\bgoogle\b/g, "██████");
	
	// Coca-Cola
	v = v.replace(/\bCoca-Cola\b/g, "█████████");
	v = v.replace(/\bcoca-cola\b/g, "█████████");
	v = v.replace(/\bCoca Cola\b/g, "█████████");
	v = v.replace(/\bCocaCola\b/g, "█████████");
	v = v.replace(/\bcocacola\b/g, "█████████");
	v = v.replace(/\bCoke\b/g, "████");
	
	// Samsung
	v = v.replace(/\bSamsung\b/g, "███████");
	v = v.replace(/\bsamsung\b/g, "███████");
	
	// Toyota
	v = v.replace(/\bToyota\b/g, "██████");
	v = v.replace(/\btoyota\b/g, "██████");
	
	// General Electric
	v = v.replace(/\bGeneral Electric\b/g, "████████████████");
	v = v.replace(/\bGeneralElectric\b/g, "████████████████");
	v = v.replace(/\bgeneral electric\b/g, "████████████████");
	v = v.replace(/\bgeneralelectric\b/g, "████████████████");
	v = v.replace(/\bGE\b/g, "████████████████");
	
	// IBM
	v = v.replace(/\bIBM\b/g, "███");
	
	// Facebook
	v = v.replace(/\bFacebook\b/g, "████████");
	v = v.replace(/\bfacebook\b/g, "████████");
	
	// Disney
	v = v.replace(/\bDisney\b/g, "██████");
	v = v.replace(/\bdisney\b/g, "██████");
	
	// AT&T
	v = v.replace(/\bAT&T\b/g, "████");
	v = v.replace(/\bat&t\b/g, "████");
	v = v.replace(/\batt\b/g, "████");
	
	// Amazon
	v = v.replace(/\bAmazon\b/g, "██████");
	v = v.replace(/\bamazon\b/g, "██████");
	
	// Louis Vuitton
	v = v.replace(/\bLouis Vuitton\b/g, "█████████████");
	v = v.replace(/\bLouisVuitton\b/g, "████████████");
	v = v.replace(/\blouis vuitton\b/g, "█████████████");
	v = v.replace(/\blouisvuitton\b/g, "█████████████");
	
	// Cisco
	v = v.replace(/\bCisco\b/g, "█████");
	v = v.replace(/\bcisco\b/g, "█████");
	
	// BMW
	v = v.replace(/\bBMW\b/g, "███");
	v = v.replace(/\bbmw\b/g, "███");
	
	// Oracle
	v = v.replace(/\bOracle\b/g, "██████");
	v = v.replace(/\boracle\b/g, "██████");
	
	// Nike 
	v = v.replace(/\bNike\b/g, "████");
	v = v.replace(/\bnike\b/g, "████");
	
	// Intel
	v = v.replace(/\bIntel\b/g, "█████");
	v = v.replace(/\bintel\b/g, "█████");
	
	// Verizon
	v = v.replace(/\bVerizon\b/g, "██████");
	v = v.replace(/\bverizon\b/g, "██████");
	
	// American Express 
	v = v.replace(/\bAmerican Express\b/g, "████████████████");
	v = v.replace(/\bAmericanExpress\b/g, "████████████████");
	v = v.replace(/\bamericanexpress\b/g, "████████████████");
	v = v.replace(/\bamerican express\b/g, "████████████████");
	
	// Honda
	v = v.replace(/\bHonda\b/g, "█████");
	v = v.replace(/\bhonda\b/g, "█████");
	
	// Mercedes-Benz
	v = v.replace(/\bMercedes-Benz\b/g, "█████████████");
	v = v.replace(/\bMercedes Benz\b/g, "█████████████");
	v = v.replace(/\bMercedesBenz\b/g, "█████████████");
	v = v.replace(/\bmercedes-benz\b/g, "█████████████");
	v = v.replace(/\bmercedes benz\b/g, "█████████████");
	v = v.replace(/\bmercedesbenz\b/g, "█████████████");
	v = v.replace(/\bMercedes\b/g, "████████");
	v = v.replace(/\bmercedes\b/g, "████████");
	
	// Budweiser
	v = v.replace(/\bBudweiser\b/g, "████████");
	v = v.replace(/\bbudweiser\b/g, "████████");
	
	// Gillette
	v = v.replace(/\bGillette\b/g, "████████");
	v = v.replace(/\bgillette\b/g, "████████");	
	
	// Marlboro
	v = v.replace(/\bMarlboro\b/g, "████████");	
	v = v.replace(/\bmarlboro\b/g, "████████");	
	
	// Pepsi
	v = v.replace(/\bPepsi\b/g, "█████");	
	v = v.replace(/\bpepsi\b/g, "█████");	
	
	// Visa 
	v = v.replace(/\bVisa\b/g, "████");
    v = v.replace(/\bvisa\b/g, "████");	
	
	// Nescafe
	v = v.replace(/\bNescafe\b/g, "███████");	
    v = v.replace(/\bnescafe\b/g, "███████");
	
	// ESPN
	v = v.replace(/\bESPN\b/g, "████");
	v = v.replace(/\bespn\b/g, "████");
	
	
	// H&M 
	v = v.replace(/\bH&M\b/g, "███");
	v = v.replace(/\bh&m\b/g, "███");
	
	// L'Oréal
	v = v.replace(/\bL'Oréal\b/g, "███████");
	v = v.replace(/\bLOreal\b/g, "███████");
	
	// Hewlett-Packard
	v = v.replace(/\bHewlett-Packard\b/g, "███████████████");
	v = v.replace(/\bhewlett-packard\b/g, "███████████████");
	v = v.replace(/\bhewlettpackard\b/g, "██████████████");
	v = v.replace(/\bHewlettPackard\b/g, "██████████████");
	v = v.replace(/\bHP\b/g, "███████████████");
	
	// HSBC
	v = v.replace(/\bHSBC\b/g, "████");
	v = v.replace(/\bhsbc\b/g, "████");
	
	// Home Depot
	v = v.replace(/\bHome Depot\b/g, "█████████");
	v = v.replace(/\bhome depot\b/g, "█████████");
	v = v.replace(/\bHomeDepot\b/g, "████████");
	v = v.replace(/\bhomedepot\b/g, "████████");
	
	// Frito-Lay
	v = v.replace(/\bFrito-Lay\b/g, "█████████");
	v = v.replace(/\bFritos\b/g, "██████");
	v = v.replace(/\bfritos\b/g, "██████");
	v = v.replace(/\bLays\b/g, "████");
	v = v.replace(/\blays\b/g, "████");
	v = v.replace(/\bFritoLay\b/g, "████████");
	v = v.replace(/\bfritolay\b/g, "████████");
	
	// Doritos
	v = v.replace(/\bDoritos\b/g, "███████");
	v = v.replace(/\bdoritos\b/g, "███████");
	
	// Audi
	v = v.replace(/\bAudi\b/g, "████");
	v = v.replace(/\baudi\b/g, "████");
	
	// UPS
	v = v.replace(/\bUPS\b/g, "███");
	v = v.replace(/\bups\b/g, "███");
	
	// Ford
	v = v.replace(/\bFord\b/g, "████");
	v = v.replace(/\bford\b/g, "████");
	 
	// Gucci
	v = v.replace(/\bGucci\b/g, "█████");
	v = v.replace(/\bgucci\b/g, "█████");
	
	// Nestle
	v = v.replace(/\bNestle\b/g, "██████");
	v = v.replace(/\bnestle\b/g, "██████");
	v = v.replace(/\bNestlé\b/g, "██████");
	v = v.replace(/\bnestlé\b/g, "██████");
	
	// Accenture
	v = v.replace(/\bAccenture\b/g, "█████████");
	v = v.replace(/\baccenture\b/g, "█████████");
	
	// Ikea
	v = v.replace(/\bIkea\b/g, "████");
	v = v.replace(/\bikea\b/g, "████");
	v = v.replace(/\bIKEA\b/g, "████");
	
	// Siemens
	v = v.replace(/\bSiemens\b/g, "███████");
	v = v.replace(/\bsiemens\b/g, "███████");
	
	// Wells Fargo
	v = v.replace(/\bWells Fargo\b/g, "███████████");
	v = v.replace(/\bWellsFargo\b/g, "██████████");
	v = v.replace(/\bwells fargo\b/g, "███████████");
	v = v.replace(/\bwellsfargo\b/g, "██████████");
	
	// Fox
	v = v.replace(/\bFox\b/g, "███");
	v = v.replace(/\bFOX\b/g, "███");
	
	// Pampers
	v = v.replace(/\bPampers\b/g, "███████");
	v = v.replace(/\bpampers\b/g, "███████");
	
	// Ebay
	v = v.replace(/\bEbay\b/g, "████");  // I'm so tired. Why are there so many brands. Why?!???!?
	v = v.replace(/\beBay\b/g, "████");
	v = v.replace(/\bebay\b/g, "████");
	v = v.replace(/\bEBAY\b/g, "████");
	
	// Hermès International
	v = v.replace(/\bHermès International\b/g, "████████████████████");
	v = v.replace(/\bhermès international\b/g, "████████████████████");
	v = v.replace(/\bHermèsInternational\b/g, "███████████████████");
	v = v.replace(/\bhermèsinternational\b/g, "████████████████████");
	v = v.replace(/\bHermes International\b/g, "████████████████████");
	v = v.replace(/\bHermesInternational\b/g, "███████████████████");
	v = v.replace(/\bhermesinternational\b/g, "████████████████████");
	
	// MasterCard
	v = v.replace(/\bMasterCard\b/g, "██████████");
	v = v.replace(/\bmastercard\b/g, "██████████");
	v = v.replace(/\bMaster Card\b/g, "███████████");
	v = v.replace(/\bmaster card\b/g, "███████████");
	
	// Chase Bank
	v = v.replace(/\bChase\b/g, "█████");
	v = v.replace(/\bchase\b/g, "█████");
	
	// Zara
	v = v.replace(/\bZara\b/g, "████");
	v = v.replace(/\bzara\b/g, "████");
	
	// Kellogg's 
	v = v.replace(/\bKellogg's\b/g, "█████████");
	v = v.replace(/\bKelloggs\b/g, "█████████");
	v = v.replace(/\bkellogg's\b/g, "█████████");
	v = v.replace(/\bkelloggs\b/g, "█████████");
	
	// Kraft
	v = v.replace(/\bKraft\b/g, "█████");
	v = v.replace(/\bkraft\b/g, "█████");
	
	// Colgate
	v = v.replace(/\bColgate\b/g, "███████");
	v = v.replace(/\bcolgate\b/g, "███████");
	
	// Chevrolet
	v = v.replace(/\bChevrolet\b/g, "█████████");
	v = v.replace(/\bchevrolet\b/g, "█████████");
	v = v.replace(/\bChevy\b/g, "█████");
	v = v.replace(/\bchevy\b/g, "█████");
	
	// Coach
	v = v.replace(/\bCoach\b/g, "█████");
	v = v.replace(/\bcoach\b/g, "█████");
	
	// Hyundai
	v = v.replace(/\bHyundai\b/g, "███████");
	v = v.replace(/\bhyundai\b/g, "███████");
	
	// Rolex
	v = v.replace(/\bRolex\b/g, "█████");
	v = v.replace(/\brolex\b/g, "█████");
	
	// Lexus
	v = v.replace(/\bLexus\b/g, "█████");
	v = v.replace(/\blexus\b/g, "█████");
	
	// Volkswagen
	v = v.replace(/\bVolkswagen\b/g, "██████████");
	v = v.replace(/\bvolkswagen\b/g, "██████████");
	
	// Santander
	v = v.replace(/\bSantander\b/g, "█████████");
	v = v.replace(/\bsantander\b/g, "█████████");
	
	// John Deere
	v = v.replace(/\bJohn Deere\b/g, "█████████");
	v = v.replace(/\bJohnDeere\b/g, "█████████");
	v = v.replace(/\bjohndeere\b/g, "█████████");
	v = v.replace(/\bjohn deere\b/g, "█████████");
	
	// Bank of America
	v = v.replace(/\bBank of America\b/g, "███████████████");
	v = v.replace(/\bbank of america\b/g, "███████████████");
	v = v.replace(/\bBankofAmerica\b/g, "███████████████");
	v = v.replace(/\bbankofamerica\b/g, "███████████████");
	v = v.replace(/\bBoA\b/g, "███");
	v = v.replace(/\bBOA\b/g, "███");
	
	// Canon
	v = v.replace(/\bCanon\b/g, "█████");
	v = v.replace(/\bcanon\b/g, "█████");
	
	// Prada
	v = v.replace(/\bPrada\b/g, "█████");
	v = v.replace(/\bprada\b/g, "█████");
	
	// Nissan
	v = v.replace(/\bNissan\b/g, "██████");
	v = v.replace(/\bnissan\b/g, "██████");
	
	// Red Bull
	v = v.replace(/\bRed Bull\b/g, "████████");
	v = v.replace(/\bRedBull\b/g, "████████");
	v = v.replace(/\bredbull\b/g, "████████");
	v = v.replace(/\bred bull\b/g, "████████");
	
	// Philips
	v = v.replace(/\bPhilips\b/g, "███████");
	v = v.replace(/\bphilips\b/g, "███████");
	
	// Porsche
	v = v.replace(/\bPorsche\b/g, "███████");
	v = v.replace(/\bporsche\b/g, "███████");
	
	// Sony
	v = v.replace(/\bSony\b/g, "████");
	v = v.replace(/\bsony\b/g, "████");
	
	// FedEx
	v = v.replace(/\bFedEx\b/g, "█████");
	v = v.replace(/\bFed Ex\b/g, "█████");
	v = v.replace(/\bfedex\b/g, "█████");
	v = v.replace(/\bfed ex\b/g, "█████");
	
	// Citi
	v = v.replace(/\bCiti Bank\b/g, "█████████");
	v = v.replace(/\bCiti\b/g, "████");
	v = v.replace(/\bciti\b/g, "████");
	
	// Boeing
	v = v.replace(/\bBoeing\b/g, "██████");
	v = v.replace(/\bboeing\b/g, "██████");
	
	// Adidas
	v = v.replace(/\bAdidas\b/g, "██████");
	v = v.replace(/\badidas\b/g, "██████");
	
	// Chanel
	v = v.replace(/\bChanel\b/g, "██████");
	v = v.replace(/\bchanel\b/g, "██████");
	
	// RBC
	v = v.replace(/\bRBC\b/g, "███");
	v = v.replace(/\brbc\b/g, "███");
	
	// Allianz
	v = v.replace(/\bAllianz\b/g, "███████");
	v = v.replace(/\ballianz\b/g, "███████");
	
	// Goldman Sachs
	v = v.replace(/\bGoldman Sachs\b/g, "█████████████");
	v = v.replace(/\bGoldmanSachs\b/g, "█████████████");
	v = v.replace(/\bgoldmansachs\b/g, "█████████████");
	v = v.replace(/\bgoldman sachs\b/g, "█████████████");
	
	// Ralph Lauren
	v = v.replace(/\bRalph Lauren\b/g, "████████████");
	v = v.replace(/\bRalphLauren\b/g, "███████████");
	v = v.replace(/\bralph lauren\b/g, "████████████");
	v = v.replace(/\bralphlauren\b/g, "███████████");
	
	// Heineken
	v = v.replace(/\bHeineken\b/g, "█████████");
	v = v.replace(/\bheineken\b/g, "█████████");
	
	// Exxon Mobil
	v = v.replace(/\bExxon Mobil\b/g, "███████████");
	v = v.replace(/\bExxonMobil\b/g, "██████████");
	v = v.replace(/\bExxon-Mobil\b/g, "███████████");
	v = v.replace(/\bexxon-mobil\b/g, "███████████");
	v = v.replace(/\bexxon mobil\b/g, "███████████");
	v = v.replace(/\bexxonmobil\b/g, "███████████");
	v = v.replace(/\bExxon\b/g, "███████████");
	v = v.replace(/\bexxon\b/g, "███████████");
	
	// Target
	v = v.replace(/\bTarget\b/g, "██████");
	v = v.replace(/\btarget\b/g, "██████");
	
	// Panasonic
	v = v.replace(/\bPanasonic\b/g, "█████████");
	v = v.replace(/\bpanasonic\b/g, "█████████");
	
	// Hershey 
	v = v.replace(/\bHershey\b/g, "███████");
	v = v.replace(/\bhershey\b/g, "███████");
	
	// LEGO
	v = v.replace(/\bLEGO\b/g, "████");
	v = v.replace(/\blego\b/g, "████");
	
	// Lancome
	v = v.replace(/\bLancome\b/g, "███████");
	v = v.replace(/\blancome\b/g, "███████");
	
	// KIA Motors
	v = v.replace(/\bKIA Motors\b/g, "██████████");
	v = v.replace(/\bKIA\b/g, "███");
	
	// Sprite
	v = v.replace(/\bSprite\b/g, "██████");
	v = v.replace(/\bsprite\b/g, "██████");
	
	// MTV
	v = v.replace(/\bMTV\b/g, "███");
	v = v.replace(/\bmtv\b/g, "███");
	
	// Estee Lauder
	v = v.replace(/\bEstee Lauder\b/g, "███████████");
	v = v.replace(/\bestee lauder\b/g, "███████████");
	v = v.replace(/\bEsteeLauder\b/g, "███████████");
	v = v.replace(/\besteelauder\b/g, "███████████");
	
	// SpaceX
	v = v.replace(/\bSpaceX\b/g, "██████");
	v = v.replace(/\bspacex\b/g, "██████");
	
	// Old Spice
	v = v.replace(/\bOld Spice\b/g, "█████████");
	v = v.replace(/\bOldSpice\b/g, "████████");
	v = v.replace(/\bold spice\b/g, "█████████");
	v = v.replace(/\boldspice\b/g, "████████");
	
	// eat24
	v = v.replace(/\beat24\b/g, "█████");
	
	// Staples
	v = v.replace(/\bStaples\b/g, "███████");
	v = v.replace(/\bstaples\b/g, "███████");
	
	// Zappos
	v = v.replace(/\bZappos\b/g, "██████");
	v = v.replace(/\bzappos\b/g, "██████");
	
	// Charmin
	v = v.replace(/\bCharmin\b/g, "███████");
	v = v.replace(/\bcharmin\b/g, "███████");
	
	// Oreo
	v = v.replace(/\bOreo\b/g, "████");
	v = v.replace(/\boreo\b/g, "████");
	
	// Popchips
	v = v.replace(/\bPopchips\b/g, "████████");
	v = v.replace(/\bpopchips\b/g, "████████");
	
	// XBox
	v = v.replace(/\bXBox\b/g, "████");
	v = v.replace(/\bxbox\b/g, "████");
	v = v.replace(/\bXbox\b/g, "████");
	v = v.replace(/\bxBox\b/g, "████");
	
	// JetBlue
	v = v.replace(/\bJetBlue\b/g, "███████");
	v = v.replace(/\bjetblue\b/g, "███████");
	
	// T-Mobile
	v = v.replace(/\bT-Mobile\b/g, "████████");
	v = v.replace(/\bTMobile\b/g, "███████");
	v = v.replace(/\btmobile\b/g, "████████");
	v = v.replace(/\bt mobile\b/g, "████████");
	v = v.replace(/\bT Mobile\b/g, "████████");
	
	// Newcastle Brown Ale
	v = v.replace(/\bNewcastle Brown Ale\b/g, "███████████████████");
	v = v.replace(/\bNewcastle\b/g, "█████████");
	v = v.replace(/\bnewcastle\b/g, "█████████");
			
	// Allstate
	v = v.replace(/\ballstate\b/g, "████████");
	v = v.replace(/\bAllstate\b/g, "████████");
	
	// Lay's
	v = v.replace(/\bLay's\b/g, "█████");
	v = v.replace(/\bLays\b/g, "█████");
	v = v.replace(/\blays\b/g, "█████");
	v = v.replace(/\blay's\b/g, "█████");
	
	// Universal Studios
	v = v.replace(/\bUniversal Studios\b/g, "█████████████████");
	
	// NBC
	v = v.replace(/\bNBC\b/g, "███");
	v = v.replace(/\bnbc\b/g, "███");
	
	// ABC
	v = v.replace(/\bABC\b/g, "███");
	v = v.replace(/\babc\b/g, "███");
	
	// CBS 
	v = v.replace(/\bCBS\b/g, "███");
	v = v.replace(/\bcbs\b/g, "███");
	
	// VH1
	v = v.replace(/\bVH1\b/g, "███");
	v = v.replace(/\bvh1\b/g, "███");
	
	// Comedy Central
	v = v.replace(/\bComedy Central\b/g, "██████████████");
	v = v.replace(/\bComedyCentral\b/g, "██████████████");
	v = v.replace(/\bcomedy central\b/g, "██████████████");
	v = v.replace(/\bcomedycentral\b/g, "██████████████");
	
	// Procter & Gamble
	v = v.replace(/\bProcter & Gamble\b/g, "████████████████");
	v = v.replace(/\bProcter And Gamble\b/g, "██████████████████");
	v = v.replace(/\bProcterGamble\b/g, "██████████████");
	v = v.replace(/\bP&G\b/g, "███");
	
	// Skittles
	v = v.replace(/\bSkittles\b/g, "████████");
	v = v.replace(/\bskittles\b/g, "████████");
	
	// Delta
	v = v.replace(/\bDelta\b/g, "█████");
	v = v.replace(/\bdelta\b/g, "█████");
	
	// Best Buy
	v = v.replace(/\bBest Buy\b/g, "████████");
	v = v.replace(/\bBestBuy\b/g, "████████");
	v = v.replace(/\bbest buy\b/g, "████████");
	v = v.replace(/\bbestbuy\b/g, "████████");
	
	// BlackBerry
	v = v.replace(/\bBlackBerry\b/g, "██████████");
	v = v.replace(/\bblackberry\b/g, "██████████");
	
	// iphone
	v = v.replace(/\biPhone\b/g, "██████");
	v = v.replace(/\biphone\b/g, "██████");
	
	// Playstation
	v = v.replace(/\bPlaystation\b/g, "███████████");
	v = v.replace(/\bplaystation\b/g, "███████████");
	
	// Southwest Airlines
	v = v.replace(/\bSouthwest Airlines\b/g, "██████████████████");
	v = v.replace(/\bSouthwestAirlines\b/g, "█████████████████");
	v = v.replace(/\bsouthwest airlines\b/g, "██████████████████");
	v = v.replace(/\bsouthwestairlines\b/g, "██████████████████");
	v = v.replace(/\bsouthwest\b/g, "█████████");
	v = v.replace(/\bSouthwest\b/g, "█████████");
	
	// United Airlines
	v = v.replace(/\bUnited Airlines\b/g, "███████████████");
	v = v.replace(/\bUnitedAirlines\b/g, "██████████████");
	v = v.replace(/\bunited airlines\b/g, "███████████████");
	v = v.replace(/\bunitedairlines\b/g, "██████████████");
	
	// Whole Foods
	v = v.replace(/\bWhole Foods\b/g, "███████████");
	v = v.replace(/\bWholeFoods\b/g, "███████████");
	v = v.replace(/\bwhole foods\b/g, "███████████");
	v = v.replace(/\bwholefoods\b/g, "███████████");
	
	// GoPro
	v = v.replace(/\bGoPro\b/g, "█████");
	v = v.replace(/\bgopro\b/g, "█████");
	
	// Papa John's
	v = v.replace(/\bPapa John's\b/g, "███████████");
	v = v.replace(/\bpapa john's\b/g, "███████████");
	v = v.replace(/\bpapajohns\b/g, "██████████");
	v = v.replace(/\bPapaJohns\b/g, "██████████");
	
	// Tide
	v = v.replace(/\bTide\b/g, "████");
	v = v.replace(/\btide\b/g, "████");
	
	// godaddy
	v = v.replace(/\bGoDaddy\b/g, "███████");
	v = v.replace(/\bgodaddy\b/g, "███████");
	
	// Monster Energy
	v = v.replace(/\bMonster Energy\b/g, "██████████████");
	v = v.replace(/\bMonsterEnergy\b/g, "██████████████");
	v = v.replace(/\bmonster energy\b/g, "██████████████");
	v = v.replace(/\bmonster energy\b/g, "██████████████");
	
	// Geico
	v = v.replace(/\bGeico\b/g, "█████");
	v = v.replace(/\bgeico\b/g, "█████");
	
	// Victoria's Secret
	v = v.replace(/\bVictoria's Secret\b/g, "█████████████████");
	v = v.replace(/\bvictoria's secret\b/g, "█████████████████");
	v = v.replace(/\bVictoriasSecret\b/g, "████████████████");
	v = v.replace(/\bvictoriassecret\b/g, "████████████████");
	
	// PayPal
	v = v.replace(/\bPayPal\b/g, "██████");
	v = v.replace(/\bpaypal\b/g, "██████");
	
	// Lowe's
	v = v.replace(/\bLowe's\b/g, "██████");
	v = v.replace(/\bLowes\b/g, "█████");
	v = v.replace(/\blowe's\b/g, "██████");
	v = v.replace(/\blowes\b/g, "██████");
	
	// Xerox
	v = v.replace(/\bXerox\b/g, "█████");
	v = v.replace(/\bxerox\b/g, "█████");
	
	// J. Crew
	v = v.replace(/\bJ. Crew\b/g, "███████");
	v = v.replace(/\bJ Crew\b/g, "██████");
	v = v.replace(/\bJCrew\b/g, "█████");
	v = v.replace(/\bjcrew\b/g, "█████");
	
	// Kaplan
	v = v.replace(/\bKaplan\b/g, "██████");
	v = v.replace(/\bkaplan\b/g, "██████");
	
	// netflix
	v = v.replace(/\bNetflix\b/g, "███████");
	v = v.replace(/\bnetflix\b/g, "███████");
	
	// Aflac
	v = v.replace(/\bAflac\b/g, "█████");
	v = v.replace(/\baflac\b/g, "█████");
	
	// Blue Cross
	v = v.replace(/\bBlue Cross\b/g, "██████████");
	v = v.replace(/\bblue cross\b/g, "██████████");
	v = v.replace(/\bBlueCross\b/g, "██████████");
	v = v.replace(/\bbluecross\b/g, "██████████");
	
	// Aetna
	v = v.replace(/\bAetna\b/g, "█████");
	v = v.replace(/\baetna\b/g, "█████");
	
	// Hulu
	v = v.replace(/\bHulu\b/g, "████");
	v = v.replace(/\bhulu\b/g, "████");
	
	// Warby Parker
	v = v.replace(/\bWarby Parker\b/g, "████████████");
	v = v.replace(/\bWarbyParker\b/g, "████████████");
	v = v.replace(/\bwarby parker\b/g, "████████████");
	v = v.replace(/\bwarbyparker\b/g, "████████████");
	
	// Ray Ban
	v = v.replace(/\bRay Ban\b/g, "███████");
	v = v.replace(/\bRayBan\b/g, "██████");
	v = v.replace(/\brayban\b/g, "██████");
	v = v.replace(/\bray ban\b/g, "███████");
	
	// JackThreads
	v = v.replace(/\bJackThreads\b/g, "███████████");
	v = v.replace(/\bJackthreads\b/g, "███████████");
	
	// Nintendo
	v = v.replace(/\bNintendo\b/g, "████████");
	v = v.replace(/\bnintendo\b/g, "████████");
	
	// Sega
	v = v.replace(/\bSEGA\b/g, "████");
	v = v.replace(/\bsega\b/g, "████");
	v = v.replace(/\bSega\b/g, "████");
	
	// Chapstick
	v = v.replace(/\bChapstick\b/g, "█████████");
	v = v.replace(/\bchapstick\b/g, "█████████");
	
	// Hot Pockets 
	v = v.replace(/\bHot Pockets\b/g, "███████████");
	v = v.replace(/\bHotPockets\b/g, "██████████");
	v = v.replace(/\bhot pockets\b/g, "███████████");
	v = v.replace(/\bhotpockets\b/g, "███████████");
	
	// Comcast
	v = v.replace(/\bComcast\b/g, "███████");
	v = v.replace(/\bcomcast\b/g, "███████");
	
	// Time Warner Cable
	v = v.replace(/\bTime Warner\b/g, "███████████");
	v = v.replace(/\btime warner\b/g, "███████████");
	v = v.replace(/\bTimeWarner\b/g, "███████████");
	v = v.replace(/\btimewarner\b/g, "███████████");
	v = v.replace(/\bTWC\b/g, "███");
	
	// Citizens Bank
	v = v.replace(/\bCitizens Bank\b/g, "█████████████");
	v = v.replace(/\bCitizensBank\b/g, "████████████");
	v = v.replace(/\bcitizens bank\b/g, "█████████████");
	v = v.replace(/\bcitizensbank\b/g, "████████████");
	
	// Wachovia
	v = v.replace(/\bWachovia\b/g, "████████");
	v = v.replace(/\bwachovia\b/g, "████████");
	
	// Bud Light
	v = v.replace(/\bBud Light\b/g, "█████████");
	v = v.replace(/\bbud light\b/g, "█████████");
	v = v.replace(/\bBudLight\b/g, "████████");
	v = v.replace(/\bbudlight\b/g, "█████████");
	
	// Michelob
	v = v.replace(/\bMichelob\b/g, "████████");
	v = v.replace(/\bmichelob\b/g, "████████");
	
	// GMC
	v = v.replace(/\bGMC\b/g, "███");
	v = v.replace(/\bgmc\b/g, "███");
	
	// TGI Fridays
	v = v.replace(/\bT.G.I. Friday's\b/g, "███████████████");
	v = v.replace(/\bTGI Fridays\b/g, "████████████");
	v = v.replace(/\bTGIFridays\b/g, "███████████");
	
	// Ruby Tuesday
	v = v.replace(/\bRuby Tuesday\b/g, "████████████");
	v = v.replace(/\bRubyTuesday\b/g, "██████████");
	v = v.replace(/\brubytuesday\b/g, "██████████");
	v = v.replace(/\bruby tuesday\b/g, "███████████");
	
	// Chipotle
	v = v.replace(/\bChipotle\b/g, "████████");
	v = v.replace(/\bchipotle\b/g, "████████");
	
	// BuzzFeed
	v = v.replace(/\bBuzzFeed\b/g, "████████");
	v = v.replace(/\bbuzzfeed\b/g, "████████");
	v = v.replace(/\bBuzzfeed\b/g, "████████");
	
	// Capital One
	v = v.replace(/\bCapital One\b/g, "███████████");
	v = v.replace(/\bCapitalOne\b/g, "██████████");
	v = v.replace(/\bcapitalone\b/g, "██████████");
	v = v.replace(/\bcapital one\b/g, "███████████");
	
	// PNC Bank
	v = v.replace(/\bPNC Bank\b/g, "████████");
	v = v.replace(/\bPNCBank\b/g, "███████");
	v = v.replace(/\bpnc bank\b/g, "████████");
	v = v.replace(/\bpncbank\b/g, "████████");
	
	// Shell Oil
	v = v.replace(/\bShell Oil\b/g, "█████████");
	v = v.replace(/\bShellOil\b/g, "█████████");
	v = v.replace(/\bShell\b/g, "█████");
	
	// Chevron
	v = v.replace(/\bChevron\b/g, "███████");
	v = v.replace(/\bchevron\b/g, "███████");
	
	// BP
	v = v.replace(/\bBP\b/g, "██");
	v = v.replace(/\bBritish Petroleum\b/g, "█████████████████");
	
	// Aramco
	v = v.replace(/\bAramco\b/g, "██████");
	v = v.replace(/\baramco\b/g, "██████");
	
	// Applebees
	v = v.replace(/\bApplebees\b/g, "█████████");
	v = v.replace(/\bapplebees\b/g, "█████████");

	// panera bread
	v = v.replace(/\bPanera Bread\b/g, "████████████");
	v = v.replace(/\bpanera bread\b/g, "████████████");
	v = v.replace(/\bPaneraBread\b/g, "███████████");
	v = v.replace(/\bpanerabread\b/g, "███████████");
	
	// Red Lobster
	v = v.replace(/\bRed Lobster\b/g, "███████████");
	v = v.replace(/\bred lobster\b/g, "███████████");
	v = v.replace(/\bRedLobster\b/g, "██████████");
	v = v.replace(/\bredlobster\b/g, "██████████");
	
	// Dos Equis
	v = v.replace(/\bDos Equis\b/g, "█████████");
	v = v.replace(/\bDosEquis\b/g, "████████");
	v = v.replace(/\bdos equis\b/g, "█████████");
	v = v.replace(/\bdosequis\b/g, "████████");
	
	// Modelo Especial 
	v = v.replace(/\bModelo\b/g, "██████");
	v = v.replace(/\bmodelo\b/g, "██████");
	
	// Stella Artois
	v = v.replace(/\bStella Artois\b/g, "█████████████");
	v = v.replace(/\bStellaArtois\b/g, "█████████████");
	v = v.replace(/\bstellaartois\b/g, "█████████████");
	v = v.replace(/\bstella artois\b/g, "█████████████");
	v = v.replace(/\bStella\b/g, "█████");
	
	// Bacardi
	v = v.replace(/\bBacardi\b/g, "███████");
	v = v.replace(/\bbacardi\b/g, "███████");
	
	// Johnnie Walker
	v = v.replace(/\bJohnnie Walker\b/g, "██████████████");
	v = v.replace(/\bJohnnieWalker\b/g, "█████████████");
	v = v.replace(/\bjohnnie walker\b/g, "██████████████");
	v = v.replace(/\bjohnniewalker\b/g, "█████████████");
	
	// Grey Goose
	v = v.replace(/\bGrey Goose\b/g, "██████████");
	v = v.replace(/\bGreyGoose\b/g, "█████████");
	v = v.replace(/\bgrey goose\b/g, "██████████");
	v = v.replace(/\bgreygoose\b/g, "█████████");
	
	// Absolut
	v = v.replace(/\bAbsolut\b/g, "███████");
	v = v.replace(/\babsolut\b/g, "███████");
	
	// Smirnoff
	v = v.replace(/\bSmirnoff\b/g, "████████");
	v = v.replace(/\bsmirnoff\b/g, "████████");
	
	// Belvedere
	v = v.replace(/\bBelvedere\b/g, "█████████");
	v = v.replace(/\bbelvedere\b/g, "█████████");
	
	// Corona
	v = v.replace(/\bCorona\b/g, "██████");
	v = v.replace(/\bcorona\b/g, "██████");
	
	// Blue Moon
	v = v.replace(/\bBlue Moon\b/g, "█████████");
	v = v.replace(/\bBlueMoon\b/g, "████████");
	v = v.replace(/\bblue moon\b/g, "█████████");
	v = v.replace(/\bbluemoon\b/g, "████████");
	
	// Guinness
	v = v.replace(/\bGuinness\b/g, "████████");
	v = v.replace(/\bguinness\b/g, "████████");
	
	// Coors
	v = v.replace(/\bCoors\b/g, "█████");
	v = v.replace(/\bcoors\b/g, "█████");
	
	// Molson
	v = v.replace(/\bMolson\b/g, "██████");
	v = v.replace(/\bmolson\b/g, "██████");
	
	// Tesla Motors
	v = v.replace(/\bTesla Motors\b/g, "████████████");
	v = v.replace(/\bTeslaMotors\b/g, "███████████");
	v = v.replace(/\bTesla\b/g, "█████");
	
	// Volvo
	v = v.replace(/\bVolvo\b/g, "█████");
	
	// Subaru
	v = v.replace(/\bSubaru\b/g, "██████");
	v = v.replace(/\bsubaru\b/g, "██████");
	
	// Cadillac
	v = v.replace(/\bCadillac\b/g, "████████");
	v = v.replace(/\bcadillac\b/g, "████████");
	
	// Winston
	v = v.replace(/\bWinston\b/g, "███████");
	v = v.replace(/\bwinston\b/g, "███████");
	
	// Camel
	v = v.replace(/\bCamel\b/g, "█████");
	v = v.replace(/\bcamel\b/g, "█████");
	
	// Lucky Strike
	v = v.replace(/\bLucky Strike\b/g, "████████████");
	v = v.replace(/\blucky strike\b/g, "████████████");
	v = v.replace(/\bLuckyStrike\b/g, "███████████");
	v = v.replace(/\bluckystrike\b/g, "████████████");
	
	// Newport
	v = v.replace(/\bNewport\b/g, "███████");
	v = v.replace(/\bnewport\b/g, "███████");
	
	// Dell
	v = v.replace(/\bDell\b/g, "████");
	v = v.replace(/\bdell\b/g, "████");
	
	// Axe Body Spray
	v = v.replace(/\bAxe Body Spray\b/g, "██████████████");
	v = v.replace(/\bAXE\b/g, "███");
	v = v.replace(/\bAxe\b/g, "███");

	// This is where I ran out of ideas.

	textNode.nodeValue = v;
}