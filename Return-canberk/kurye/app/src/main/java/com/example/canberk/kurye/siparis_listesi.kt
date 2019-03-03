package com.example.canberk.kurye

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.support.design.widget.BottomNavigationView
import android.support.v7.app.AppCompatActivity
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.*

class siparis_listesi : AppCompatActivity() {

    private val mTextMessage: TextView? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.s_listesi)
        val bottomNavigationView = findViewById<View>(R.id.navigation) as BottomNavigationView

        val menu = bottomNavigationView.menu
        val menuItem = menu.getItem(1)
        menuItem.isChecked = true

        bottomNavigationView.setOnNavigationItemSelectedListener(BottomNavigationView.OnNavigationItemSelectedListener { menuItem ->
            when (menuItem.itemId) {

                R.id.navigation_dashboard -> {
                    val intent1 = Intent(this@siparis_listesi, siparis_listesi::class.java)
                    startActivity(intent1)
                    return@OnNavigationItemSelectedListener true
                }

                R.id.navigation_notifications -> {
                    val intent2 = Intent(this@siparis_listesi, siparis_detay::class.java)
                    startActivity(intent2)
                    return@OnNavigationItemSelectedListener true
                }

                R.id.navigation_home -> {
                    val intent3 = Intent(this@siparis_listesi, ana_sayfa::class.java)
                    startActivity(intent3)
                    return@OnNavigationItemSelectedListener true
                }
            }
            false
        })

        val listView = findViewById<ListView>(R.id.siparis_listview)
        //val orderList = Order.getOrdersFromFile("orders.json", this)
        listView.adapter = CustomSiparisListesiAdapter(this)
        /*
        val context = this
        listView.setOnItemClickListener{ parent: AdapterView<*>,view: View?, position:Int,id: Long ->

            val selectedOrder = listView.getItemAtPosition(position)

            val detailIntent = siparis_detay.newIntent(context, selectedOrder)

            startActivity(detailIntent)
        }
        */

    }
    class CustomSiparisListesiAdapter(context: Context): BaseAdapter(){
        private val mContext: Context

        private val orders = arrayListOf<String>(
                "Canberk Sakarya", "Azra Kurtaraner", "Utku Çuhadaroğlu", "Burak Durgunsu", "Berk Bacalan", "Steve Jobs", "Bill Gates", "Mark Zuckerber", "Zeki Mazan", "Ali Yılmaz", "Lale Demirkaya", "Sinem Çelik", "Mehmet Yılmazer", "Fikret Yaşar"
        )

        init {
            mContext = context
        }

        override fun getCount(): Int {
            return orders.size
        }
        override fun getItemId(position: Int): Long {
            return position.toLong()
        }
        override fun getItem(position: Int): Any {
            return "test"
        }
        override fun getView(position: Int, convertView: View?, viewGroup: ViewGroup?): View {
            val layoutInflater = LayoutInflater.from(mContext)
            val rowMain = layoutInflater.inflate(R.layout.row,viewGroup,false)
            val ordersTextView = rowMain.findViewById<TextView>(R.id.textView4)
            ordersTextView.text = orders.get(position)
            val positionTextView = rowMain.findViewById<TextView>(R.id.textView5)
            positionTextView.text = "Sipariş Numarası: $position"
            val order = getItem(position) as Order
            return rowMain
            //val textView = TextView(mContext)
            //textView.text = "test text for the row for listview"
            //return textView
        }
    }

}
