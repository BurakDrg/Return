package com.example.canberk.kurye

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.support.design.widget.BottomNavigationView
import android.support.v7.app.AppCompatActivity
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import android.widget.ListView
import android.widget.TextView
import com.google.android.gms.maps.GoogleMap
import com.google.android.gms.maps.MapView
import com.google.android.gms.maps.OnMapReadyCallback
import com.google.android.gms.maps.model.LatLng
import com.google.android.gms.maps.model.MarkerOptions


class siparis_detay : AppCompatActivity(), OnMapReadyCallback {

    private val mTextMessage: TextView? = null
    private var mMapView: MapView? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.s_detay)
        mMapView = findViewById<View>(R.id.mapView) as MapView?

        initGoogleMap(savedInstanceState)
        val bottomNavigationView = findViewById<View>(R.id.navigation) as BottomNavigationView

        val menu = bottomNavigationView.menu
        val menuItem = menu.getItem(1)
        menuItem.isChecked = true

        bottomNavigationView.setOnNavigationItemSelectedListener(BottomNavigationView.OnNavigationItemSelectedListener { menuItem ->
            when (menuItem.itemId) {

                R.id.navigation_dashboard -> {
                    val intent1 = Intent(this@siparis_detay, siparis_detay::class.java)
                    startActivity(intent1)
                    return@OnNavigationItemSelectedListener true
                }

                R.id.navigation_notifications -> {
                    val intent2 = Intent(this@siparis_detay, kurye_profil::class.java)
                    startActivity(intent2)
                    return@OnNavigationItemSelectedListener true
                }

                R.id.navigation_home -> {
                    val intent3 = Intent(this@siparis_detay, ana_sayfa::class.java)
                    startActivity(intent3)
                    return@OnNavigationItemSelectedListener true
                }
            }
            false
        })
        val listView = findViewById<ListView>(R.id.siparis_detay_listview)
        listView.adapter = CustomSiparisListesiAdapter(this)
    }

    private fun initGoogleMap(savedInstanceState: Bundle?) {
        // *** IMPORTANT ***
        // MapView requires that the Bundle you pass contain _ONLY_ MapView SDK
        // objects or sub-Bundles.
        var mapViewBundle: Bundle? = null
        if (savedInstanceState != null) {
            mapViewBundle = savedInstanceState.getBundle(MAPVIEW_BUNDLE_KEY)
        }

        mMapView!!.onCreate(mapViewBundle)

        mMapView!!.getMapAsync(this)
    }

    public override fun onSaveInstanceState(outState: Bundle) {
        super.onSaveInstanceState(outState)

        var mapViewBundle = outState.getBundle(MAPVIEW_BUNDLE_KEY)
        if (mapViewBundle == null) {
            mapViewBundle = Bundle()
            outState.putBundle(MAPVIEW_BUNDLE_KEY, mapViewBundle)
        }

        mMapView!!.onSaveInstanceState(mapViewBundle)
    }

    public override fun onResume() {
        super.onResume()
        mMapView!!.onResume()
    }

    public override fun onStart() {
        super.onStart()
        mMapView!!.onStart()
    }

    public override fun onStop() {
        super.onStop()
        mMapView!!.onStop()
    }

    override fun onMapReady(map: GoogleMap) {
        map.addMarker(MarkerOptions().position(LatLng(0.0, 0.0)).title("Marker"))
    }

    public override fun onPause() {
        mMapView!!.onPause()
        super.onPause()
    }

    public override fun onDestroy() {
        mMapView!!.onDestroy()
        super.onDestroy()
    }

    override fun onLowMemory() {
        super.onLowMemory()
        mMapView!!.onLowMemory()
    }

    companion object {
        private val MAPVIEW_BUNDLE_KEY = "MapViewBundleKey"
    }

    private class CustomSiparisListesiAdapter(context: Context): BaseAdapter(){
        private val mContext: Context

        private val names = arrayListOf<String>(
                "elma", "armut", "peynir", "süt", "un", "kavun", "dana pirzola", "biftek", "ahududu", "yoğurt", "ekmek", "Su", "tuz", "Fıstık"
        )
        private val places = arrayListOf<String>(
                "migros", "migros", "migros", "bim", "şok", "şok", "şok", "çağdaş", "çağdaş", "çağdaş", "çağdaş", "Makro Market", "Makro Market", "Makro Market"
        )

        init {
            mContext = context
        }

        override fun getCount(): Int {
            return names.size
        }
        override fun getItemId(position: Int): Long {
            return position.toLong()
        }
        override fun getItem(position: Int): Any {
            return "test"
        }
        override fun getView(position: Int, convertView: View?, viewGroup: ViewGroup?): View {
            val layoutInflater = LayoutInflater.from(mContext)
            val rowMain = layoutInflater.inflate(R.layout.row2,viewGroup,false)
            val nameTextView = rowMain.findViewById<TextView>(R.id.textView12)
            nameTextView.text = names.get(position)
            val placeTextView = rowMain.findViewById<TextView>(R.id.textView13)
            placeTextView.text = places.get(position)
            val positionTextView = rowMain.findViewById<TextView>(R.id.textView14)
            positionTextView.text = "$position"
            return rowMain
            //val textView = TextView(mContext)
            //textView.text = "test text for the row for listview"
            //return textView
        }
    }
}
